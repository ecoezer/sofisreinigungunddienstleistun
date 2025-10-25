import './About.css'
import { CheckIcon } from './Icons'
import { useEffect, useRef, useState } from 'react'

function About() {
  const [counters, setCounters] = useState({ years: 0, clients: 0, quality: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounters({
        years: Math.floor(10 * progress),
        clients: Math.floor(500 * progress),
        quality: Math.floor(100 * progress)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounters({ years: 10, clients: 500, quality: 100 })
      }
    }, stepDuration)
  }

  return (
    <section id="about" className="about" ref={sectionRef}>
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
                <div className="value-number">{counters.years}+</div>
                <div className="value-label">Jahre Erfahrung</div>
              </div>
              <div className="value-item">
                <div className="value-number">{counters.clients}+</div>
                <div className="value-label">Zufriedene Kunden</div>
              </div>
              <div className="value-item">
                <div className="value-number">{counters.quality}%</div>
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
            <div className="benefit benefit-orange">
              <span className="benefit-icon"><CheckIcon /></span>
              <h4>Erfahrenes Team</h4>
              <p>Geschulte Mitarbeiter mit langjähriger Expertise</p>
            </div>
            <div className="benefit benefit-blue">
              <span className="benefit-icon"><CheckIcon /></span>
              <h4>Umweltfreundlich</h4>
              <p>Verwendung umweltschonender Reinigungsmittel</p>
            </div>
            <div className="benefit benefit-purple">
              <span className="benefit-icon"><CheckIcon /></span>
              <h4>Flexible Termine</h4>
              <p>Anpassung an Ihre zeitlichen Bedürfnisse</p>
            </div>
            <div className="benefit benefit-pink">
              <span className="benefit-icon"><CheckIcon /></span>
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
