import { useState } from 'react'
import './FloatingActionButton.css'

function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const callPhone = () => {
    window.location.href = 'tel:+4917672613684'
  }

  const sendEmail = () => {
    window.location.href = 'mailto:info@sofis-reinigung.de'
  }

  return (
    <>
      <div className={`fab-menu ${isOpen ? 'open' : ''}`}>
        <button className="fab-action" onClick={scrollToContact} title="Kontaktformular">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L10.89 13.26C11.23 13.47 11.66 13.47 12 13.26L20 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="fab-action" onClick={callPhone} title="Anrufen">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22 20.4728 21.5523 20.9203 21 20.92C10.0736 20.9203 1.07969 11.9264 1.08 1C1.07969 0.447715 1.52715 0 2.08 0H5.08C5.63229 0 6.08 0.447715 6.08 1C6.11 3.07 6.51 5.05 7.22 6.88C7.36 7.26 7.25 7.69 6.94 7.96L5.25 9.48C6.93 12.92 9.71 15.7 13.15 17.38L14.67 15.69C14.94 15.38 15.37 15.27 15.75 15.41C17.58 16.12 19.56 16.52 21.63 16.55C22.1928 16.55 22.64 16.9977 22.64 17.55V20.55" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="fab-action" onClick={sendEmail} title="E-Mail senden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <button
        className={`fab-main ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Kontaktoptionen"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </>
  )
}

export default FloatingActionButton
