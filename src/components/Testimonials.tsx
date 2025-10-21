import { useState, useEffect } from 'react'
import './Testimonials.css'
import { StarIcon } from './Icons'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Maria Schmidt',
      role: 'Privatkundin',
      text: 'Sofi\'s Reinigung hat unsere Wohnung in einen glänzenden Zustand versetzt. Das Team ist professionell, pünktlich und sehr gründlich. Absolut empfehlenswert!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Thomas Müller',
      role: 'Geschäftsführer',
      text: 'Seit zwei Jahren vertrauen wir auf die Büroreinigung von Sofi\'s Team. Zuverlässig, diskret und immer freundlich. Unsere Büroräume sind stets makellos sauber.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Anna Weber',
      role: 'Hausbesitzerin',
      text: 'Die Grundreinigung nach unserem Umzug war perfekt. Jede Ecke wurde gründlich gereinigt. Der Service war jeden Euro wert. Vielen Dank!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Klaus Fischer',
      role: 'Restaurant-Inhaber',
      text: 'Hervorragender Service! Die Fensterreinigung wurde schnell und streifenfrei durchgeführt. Das Team ist sehr professionell und achtet auf jedes Detail.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Was unsere Kunden sagen</h2>
        <p className="testimonials-intro">
          Überzeugen Sie sich von der Qualität unserer Arbeit durch die Erfahrungen zufriedener Kunden
        </p>

        <div className="testimonials-carousel">
          <button className="carousel-button prev" onClick={prevSlide} aria-label="Vorheriges Testimonial">
            ←
          </button>

          <div className="testimonials-wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''} ${
                  index === (currentIndex - 1 + testimonials.length) % testimonials.length ? 'prev' : ''
                } ${index === (currentIndex + 1) % testimonials.length ? 'next' : ''}`}
              >
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <div className="rating">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={nextSlide} aria-label="Nächstes Testimonial">
            →
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Gehe zu Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
