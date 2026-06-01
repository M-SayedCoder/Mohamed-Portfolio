import { experiences } from '../data'

function t(val, lang) {
  if (typeof val === 'string') return val
  return lang === 'en' ? val.en : val.ar
}

export default function Experience({ lang }) {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">{lang === 'en' ? 'Experience' : 'الخبرة'}</span>
          <h2 className="section-title">{lang === 'en' ? 'My Journey' : 'مسيرتي المهنية'}</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">{t(exp.date, lang)}</span>
                <h3 className="timeline-title">{t(exp.title, lang)}</h3>
                <span className="timeline-company">{t(exp.company, lang)}</span>
                <p className="timeline-description">{t(exp.desc, lang)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
