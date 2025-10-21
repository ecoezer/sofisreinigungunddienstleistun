import { useState } from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [showImpressum, setShowImpressum] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)

  const handleImpressumClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowImpressum(!showImpressum)
    setShowDatenschutz(false)
  }

  const handleDatenschutzClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowDatenschutz(!showDatenschutz)
    setShowImpressum(false)
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sofi's Reinigung</h3>
          <p>
            Ihr zuverlässiger Partner für professionelle Reinigungsdienste.
            Wir sorgen für Sauberkeit und Ordnung in Ihrem Zuhause und Büro.
          </p>
        </div>

        <div className="footer-section">
          <h4>Schnelllinks</h4>
          <ul>
            <li><a href="#home">Start</a></li>
            <li><a href="#services">Dienstleistungen</a></li>
            <li><a href="#about">Über uns</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Dienstleistungen</h4>
          <ul>
            <li>Haushaltsreinigung</li>
            <li>Büroreinigung</li>
            <li>Fensterreinigung</li>
            <li>Grundreinigung</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>
          <ul>
            <li>📞 +49 123 456 7890</li>
            <li>✉️ info@sofis-reinigung.de</li>
            <li>📍 Dr.-Jasper-Straße 6a, 31073 Delligsen</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Sofi's Reinigung und Dienstleistungen. Alle Rechte vorbehalten. | <a href="#impressum" onClick={handleImpressumClick}>Impressum</a> | <a href="#datenschutz" onClick={handleDatenschutzClick}>Datenschutz</a></p>

        {showImpressum && (
          <div className="legal-content">
            <h3>Impressum</h3>
            <p><strong>Angaben gemäß § 5 TMG:</strong></p>
            <p>Sofi's Reinigung und Dienstleistungen<br />
            Dr.-Jasper-Straße 6a<br />
            31073 Delligsen</p>
            <p><strong>Kontakt:</strong><br />
            Telefon: +49 123 456 7890<br />
            E-Mail: info@sofis-reinigung.de</p>
          </div>
        )}

        {showDatenschutz && (
          <div className="legal-content">
            <h3>Datenschutzerklärung</h3>
            <p><strong>1. Datenschutz auf einen Blick</strong></p>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
            <p><strong>2. Allgemeine Hinweise und Pflichtinformationen</strong></p>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer
