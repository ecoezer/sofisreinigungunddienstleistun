import './Services.css'
import { HomeIcon, OfficeIcon, WindowIcon, SparkleIcon, CarpetIcon, IronIcon } from './Icons'

function Services() {
  const services = [
    {
      title: 'Haushaltsreinigung',
      description: 'Gründliche Reinigung Ihrer Wohnräume, Küche, Badezimmer und aller Wohnbereiche.',
      Icon: HomeIcon
    },
    {
      title: 'Büroreinigung',
      description: 'Professionelle Reinigung von Büros, Besprechungsräumen und Arbeitsbereichen.',
      Icon: OfficeIcon
    },
    {
      title: 'Fensterreinigung',
      description: 'Streifenfreie Reinigung Ihrer Fenster innen und außen für klare Sicht.',
      Icon: WindowIcon
    },
    {
      title: 'Grundreinigung',
      description: 'Intensive Tiefenreinigung für Umzug, Renovierung oder nach Bauarbeiten.',
      Icon: SparkleIcon
    },
    {
      title: 'Teppichreinigung',
      description: 'Schonende und effektive Reinigung von Teppichen und Polstermöbeln.',
      Icon: CarpetIcon
    },
    {
      title: 'Bügel-Service',
      description: 'Professionelles Bügeln Ihrer Wäsche und Textilien nach höchsten Standards.',
      Icon: IronIcon
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
              <div className="service-icon">
                <service.Icon />
              </div>
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
