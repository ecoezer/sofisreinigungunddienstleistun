import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Über Uns</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Ihr Partner für Sauberkeit und Ordnung</h3>
            <p>
              Sofi's Reinigung und Dienstleistungen steht für professionelle, zuverlässige und
              gründliche Reinigungsarbeit. Mit langjähriger Erfahrung und einem engagierten Team
              sorgen wir dafür, dass Ihre Räumlichkeiten in bestem Zustand sind.
            </p>
            <p>
              Wir legen großen Wert auf Qualität, Pünktlichkeit und Kundenzufriedenheit.
              Jeder Auftrag wird mit höchster Sorgfalt und Aufmerksamkeit für Details ausgeführt.
            </p>

            <div className="about-values">
              <div className="value-item">
                <div className="value-number">10+</div>
                <div className="value-label">Jahre Erfahrung</div>
              </div>
              <div className="value-item">
                <div className="value-number">500+</div>
                <div className="value-label">Zufriedene Kunden</div>
              </div>
              <div className="value-item">
                <div className="value-number">100%</div>
                <div className="value-label">Qualitätsgarantie</div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professionelle Reinigung"
            />
          </div>
        </div>

        <div className="why-us">
          <h3>Warum Sofi's Reinigung?</h3>
          <div className="benefits-grid">
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <h4>Erfahrenes Team</h4>
              <p>Geschulte Mitarbeiter mit langjähriger Expertise</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <h4>Umweltfreundlich</h4>
              <p>Verwendung umweltschonender Reinigungsmittel</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <h4>Flexible Termine</h4>
              <p>Anpassung an Ihre zeitlichen Bedürfnisse</p>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <h4>Fair & Transparent</h4>
              <p>Klare Preise ohne versteckte Kosten</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
