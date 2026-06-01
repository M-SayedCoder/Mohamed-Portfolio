import { useState } from 'react'
import { testimonials } from '../data'

function getImg(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

export default function Testimonials({ lang }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">{lang === 'en' ? 'Testimonials' : 'آراء العملاء'}</span>
          <h2 className="section-title">{lang === 'en' ? 'What People Say' : 'ماذا يقولون'}</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={getImg(t.img)} alt={t.author} />
            </div>
            <p className="testimonial-text">{lang === 'en' ? t.text.en : t.text.ar}</p>
            <h4 className="testimonial-author">{t.author}</h4>
            <span className="testimonial-role">{lang === 'en' ? t.role.en : t.role.ar}</span>
          </div>
          <button className="carousel-control-prev" onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  )
}
