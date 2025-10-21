import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Unsere Leistungen im Überblick</h1>
        <p className="hero-subtitle">
          Wir bieten Ihnen ein umfassendes Leistungsspektrum rund um Reinigung, Pflege und Betreuung von Immobilien.
          Ob Gebäudereinigung, Hausmeisterservice oder der Verkauf von Reinigungsmitteln – bei uns finden Sie
          passgenaue Lösungen für Ihre Anforderungen. Unser erfahrenes Team arbeitet zuverlässig, gründlich und mit
          vollem Einsatz. Entdecken Sie hier unsere Leistungen auf einen Blick.
        </p>
        <button className="cta-button" onClick={scrollToContact}>
          Jetzt Kontakt aufnehmen!
        </button>
      </div>
    </section>
  )
}

export default Hero
