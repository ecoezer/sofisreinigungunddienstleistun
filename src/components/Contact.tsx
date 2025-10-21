import { useState } from 'react'
import './Contact.css'
import { PhoneIcon, MailIcon, LocationIcon, ClockIcon } from './Icons'
import { supabase } from '../lib/supabase'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            service: formData.service || null,
            message: formData.message
          }
        ])

      if (submitError) throw submitError

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      }, 5000)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Kontaktieren Sie uns</h2>
        <p className="contact-intro">
          Haben Sie Fragen oder möchten Sie ein Angebot anfragen? Wir freuen uns auf Ihre Nachricht!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Kontaktinformationen</h3>

            <div className="info-item">
              <span className="info-icon"><PhoneIcon /></span>
              <div>
                <h4>Telefon</h4>
                <p>+49 123 456 7890</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"><MailIcon /></span>
              <div>
                <h4>E-Mail</h4>
                <p>info@sofis-reinigung.de</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"><LocationIcon /></span>
              <div>
                <h4>Adresse</h4>
                <p>Musterstraße 123<br />12345 Musterstadt</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"><ClockIcon /></span>
              <div>
                <h4>Öffnungszeiten</h4>
                <p>
                  Mo - Fr: 08:00 - 18:00 Uhr<br />
                  Sa: 09:00 - 14:00 Uhr
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <h3>Vielen Dank!</h3>
                <p>Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="error-message">
                    <p>{error}</p>
                  </div>
                )}
                <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Gewünschte Dienstleistung</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="haushaltsreinigung">Haushaltsreinigung</option>
                    <option value="bueroreinigung">Büroreinigung</option>
                    <option value="fensterreinigung">Fensterreinigung</option>
                    <option value="grundreinigung">Grundreinigung</option>
                    <option value="teppichreinigung">Teppichreinigung</option>
                    <option value="buegel-service">Bügel-Service</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
