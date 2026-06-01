import { useEffect, useRef } from 'react'
import aboutImg from '../assets/images/WhatsApp Image 2026-02-15 at 4.50.13 PM (1).jpeg'

const stats = [
  { target: 10, en: '+ Projects', ar: '+ مشاريع' },
  { target: 4, en: '+ Leadership Roles', ar: '+ أدوار قيادية' },
  { target: 2, en: '+ Years Learning', ar: '+ سنوات تعلم' },
]

export default function About({ lang }) {
  const countersRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countersRef.current.forEach((el, i) => {
            if (!el) return
            const target = stats[i].target
            let count = 0
            const step = Math.ceil(target / 40)
            const interval = setInterval(() => {
              count += step
              if (count >= target) { count = target; clearInterval(interval) }
              el.textContent = count
            }, 40)
          })
          observer.disconnect()
        }
      })
    }, { threshold: 0.3 })

    const section = document.getElementById('about')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 about-image-col">
            <div className="about-image-wrapper">
              <img src={aboutImg} alt="About Me" className="about-image" />
            </div>
          </div>
          <div className="col-lg-7 about-content-col">
            <div className="section-header">
              <span className="section-subtitle">{lang === 'en' ? 'About Me' : 'عني'}</span>
              <h2 className="section-title">{lang === 'en' ? 'Professional Summary' : 'الملخص المهني'}</h2>
            </div>
            <p className="about-text">
              {lang === 'en'
                ? "I'm a Full Stack Developer specializing in building modern and scalable web applications. My expertise includes Django backend development, REST API design, and full-stack solution architecture. I earned my Bachelor's degree in Computer Science from the Arab Open University, where I developed strong analytical and software engineering skills."
                : 'أنا مطور ويب متكامل متخصص في بناء تطبيقات ويب حديثة وقابلة للتوسع. خبرتي تشمل تطوير الواجهة الخلفية باستخدام Django وتصميم REST APIs وهندسة الحلول المتكاملة. حصلت على بكالوريوس علوم الحاسب من الجامعة العربية المفتوحة.'}
            </p>
            <div className="stats-container">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-number" ref={el => countersRef.current[i] = el}>0</span>
                  <span className="stat-label">{lang === 'en' ? stat.en : stat.ar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
