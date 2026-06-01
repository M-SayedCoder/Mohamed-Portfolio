import { useState } from 'react'
import { certifications } from '../data'

function getImg(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

function t(val, lang) {
  if (typeof val === 'string') return val
  return lang === 'en' ? val.en : val.ar
}

function CertCard({ cert, lang, onClick }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="cert-card" onClick={() => onClick(cert.img)} style={{ cursor: 'pointer' }}>
        <div className="cert-image">
          <img src={getImg(cert.img)} alt={t(cert.title, lang)} />
        </div>
        <div className="cert-content">
          <h4 className="cert-title">{t(cert.title, lang)}</h4>
          <p className="cert-issuer">{t(cert.issuer, lang)}</p>
        </div>
      </div>
    </div>
  )
}

export default function Certifications({ lang }) {
  const [lightboxImg, setLightboxImg] = useState(null)

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">{lang === 'en' ? 'Certifications' : 'الشهادات'}</span>
          <h2 className="section-title">{lang === 'en' ? 'Professional Certifications' : 'الشهادات المهنية'}</h2>
        </div>

        {[
          { year: '2025', items: certifications[2025] },
          { year: '2024', items: certifications[2024] },
          { year: lang === 'en' ? 'Other Diplomas & Certificates' : 'دبلومات وشهادات أخرى', items: certifications.other },
        ].map(section => (
          <div key={section.year} className="cert-year-section">
            <h3 className="cert-year-header">{section.year}</h3>
            <div className="row">
              {section.items.map((cert, i) => (
                <CertCard key={i} cert={cert} lang={lang} onClick={setLightboxImg} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {lightboxImg && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setLightboxImg(null)}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={e => e.stopPropagation()}>
            <div className="modal-content cert-modal">
              <div className="modal-body" style={{ padding: 0 }}>
                <button className="btn-close" onClick={() => setLightboxImg(null)} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}></button>
                <img src={getImg(lightboxImg)} alt="Certificate" style={{ width: '100%', borderRadius: 8 }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
