import './TrustBadges.css'

function TrustBadges() {
  const badges = [
    {
      title: 'ISO 9001',
      subtitle: 'Zertifiziert',
      description: 'Qualitätsmanagement'
    },
    {
      title: '100%',
      subtitle: 'Garantie',
      description: 'Zufriedenheitsgarantie'
    },
    {
      title: 'Versichert',
      subtitle: 'Vollständig',
      description: 'Haftpflicht & Kaution'
    },
    {
      title: 'Öko',
      subtitle: 'Zertifiziert',
      description: 'Umweltfreundlich'
    }
  ]

  return (
    <section className="trust-badges">
      <div className="container">
        <div className="badges-grid">
          {badges.map((badge, index) => (
            <div key={index} className="badge-item">
              <div className="badge-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="url(#badge-gradient)" stroke="url(#badge-gradient)" strokeWidth="1.5"/>
                  <defs>
                    <linearGradient id="badge-gradient" x1="2" y1="2" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10b981"/>
                      <stop offset="1" stopColor="#06b6d4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3>{badge.title}</h3>
              <p className="badge-subtitle">{badge.subtitle}</p>
              <p className="badge-description">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
