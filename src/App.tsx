import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustBadges from './components/TrustBadges'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Impressum from './components/Impressum'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustBadges />
        <About />
        <Testimonials />
        <Contact />
        <Impressum />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}

export default App
