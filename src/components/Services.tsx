import './Services.css'

function Services() {
  const services = [
    {
      title: 'Haushaltsreinigung',
      description: 'Gründliche Reinigung Ihrer Wohnräume, Küche, Badezimmer und aller Wohnbereiche.',
      icon: '🏠'
    },
    {
      title: 'Büroreinigung',
      description: 'Professionelle Reinigung von Büros, Besprechungsräumen und Arbeitsbereichen.',
      icon: '🏢'
    },
    {
      title: 'Fensterreinigung',
      description: 'Streifenfreie Reinigung Ihrer Fenster innen und außen für klare Sicht.',
      icon: '🪟'
    },
    {
      title: 'Grundreinigung',
      description: 'Intensive Tiefenreinigung für Umzug, Renovierung oder nach Bauarbeiten.',
      icon: '✨'
    },
    {
      title: 'Teppichreinigung',
      description: 'Schonende und effektive Reinigung von Teppichen und Polstermöbeln.',
      icon: '🧹'
    },
    {
      title: 'Bügel-Service',
      description: 'Professionelles Bügeln Ihrer Wäsche und Textilien nach höchsten Standards.',
      icon: '👔'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Unsere Dienstleistungen</h2>
        <p className="services-intro">
          Wir bieten Ihnen ein umfassendes Spektrum an professionellen Reinigungsdienstleistungen
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
