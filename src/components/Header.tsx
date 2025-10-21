import { useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Sofi's Reinigung</h1>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('home')}>Start</button>
          <button onClick={() => scrollToSection('services')}>Dienstleistungen</button>
          <button onClick={() => scrollToSection('about')}>Über uns</button>
          <button onClick={() => scrollToSection('contact')}>Kontakt</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
