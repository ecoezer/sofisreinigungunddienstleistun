import './Services.css'

function Services() {
  const services = [
    {
      title: 'Haushaltsreinigung',
      description: 'Gründliche Reinigung Ihrer Wohnräume, Küche, Badezimmer und aller Wohnbereiche.',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Büroreinigung',
      description: 'Professionelle Reinigung von Büros, Besprechungsräumen und Arbeitsbereichen.',
      image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Fensterreinigung',
      description: 'Streifenfreie Reinigung Ihrer Fenster innen und außen für klare Sicht.',
      image: 'https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Grundreinigung',
      description: 'Intensive Tiefenreinigung für Umzug, Renovierung oder nach Bauarbeiten.',
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Teppichreinigung',
      description: 'Schonende und effektive Reinigung von Teppichen und Polstermöbeln.',
      image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Bügel-Service',
      description: 'Professionelles Bügeln Ihrer Wäsche und Textilien nach höchsten Standards.',
      image: 'https://images.pexels.com/photos/4107221/pexels-photo-4107221.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Entrümpelungen mit Endreinigung',
      description: 'Professionelle Entrümpelung von Räumen mit abschließender gründlicher Reinigung.',
      image: 'https://images.pexels.com/photos/6195888/pexels-photo-6195888.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Haushaltsauflösungen',
      description: 'Vollständige Haushaltsauflösung mit Entsorgung und anschließender Reinigung.',
      image: 'https://images.pexels.com/photos/4246115/pexels-photo-4246115.jpeg?auto=compress&cs=tinysrgb&w=800'
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
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
