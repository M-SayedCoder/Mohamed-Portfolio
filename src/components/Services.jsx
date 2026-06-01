import { services } from '../data'

export default function Services({ lang }) {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">{lang === 'en' ? 'Services' : 'الخدمات'}</span>
          <h2 className="section-title">{lang === 'en' ? 'What I Offer' : 'ما أقدمه'}</h2>
        </div>
        <div className="row">
          {services.map((s, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className={s.icon}></i>
                </div>
                <h3 className="service-title">{lang === 'en' ? s.title.en : s.title.ar}</h3>
                <p className="service-description">{lang === 'en' ? s.desc.en : s.desc.ar}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
