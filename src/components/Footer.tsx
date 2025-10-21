import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

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
            <li>📍 Musterstraße 123</li>
            <li>12345 Musterstadt</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Sofi's Reinigung und Dienstleistungen. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}

export default Footer
