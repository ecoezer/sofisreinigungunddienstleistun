/*
  # Create contact submissions table

  ## Summary
  Creates a table to store contact form submissions from the website, allowing the business to track and manage customer inquiries.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) - Unique identifier for each submission
    - `name` (text, required) - Customer's full name
    - `email` (text, required) - Customer's email address
    - `phone` (text, optional) - Customer's phone number
    - `service` (text, optional) - The service they're interested in
    - `message` (text, required) - The customer's message or inquiry
    - `status` (text, default 'new') - Submission status (new, contacted, completed)
    - `created_at` (timestamptz, default now()) - Timestamp of submission
    - `updated_at` (timestamptz, default now()) - Last update timestamp

  ## Security
  - Enable RLS on `contact_submissions` table
  - Add policy for anonymous users to insert new submissions
  - Add policy for authenticated users to read and update submissions

  ## Notes
  - Email validation should be done on the client side
  - Status field allows tracking inquiry progress
  - Timestamps enable sorting and filtering by date
*/

-- Create the contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'archived')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert their submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Authenticated users can read all submissions
CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can update submissions
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_contact_submissions_updated_at'
  ) THEN
    CREATE TRIGGER update_contact_submissions_updated_at
      BEFORE UPDATE ON contact_submissions
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;
