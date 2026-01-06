import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustBadges from './components/TrustBadges'
import About from './components/About'
import Contact from './components/Contact'
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
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}

export default App
