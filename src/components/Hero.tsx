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
        <h1>Professionelle Reinigungsdienste</h1>
        <p className="hero-subtitle">
          Wir sorgen für Sauberkeit und Ordnung in Ihrem Zuhause und Büro
        </p>
        <div className="hero-features">
          <div className="feature-badge">
            <span>Zuverlässig</span>
          </div>
          <div className="feature-badge">
            <span>Erfahren</span>
          </div>
          <div className="feature-badge">
            <span>Gründlich</span>
          </div>
        </div>
        <button className="cta-button" onClick={scrollToContact}>
          Jetzt Angebot anfragen
        </button>
      </div>
    </section>
  )
}

export default Hero
