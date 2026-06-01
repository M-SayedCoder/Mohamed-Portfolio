import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'

// ── UPDATE THESE WITH YOUR EMAILJS CREDENTIALS ──────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact({ lang }) {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.error(lang === 'en' ? 'Please fill in all fields.' : 'يرجى ملء جميع الحقول.')
      return
    }

    setLoading(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      toast.success(lang === 'en' ? '✅ Message sent successfully!' : '✅ تم إرسال رسالتك بنجاح!')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      toast.error(lang === 'en' ? '❌ Failed to send. Please try again.' : '❌ فشل الإرسال. حاول مرة أخرى.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        theme="dark"
        toastStyle={{
          background: 'var(--color-dark-card)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-white)',
          fontFamily: 'var(--font-body)',
        }}
      />
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">{lang === 'en' ? 'Contact' : 'تواصل معي'}</span>
          <h2 className="section-title">
            {lang === 'en' ? "Let's Build Something Great Together" : 'لنبني شيئاً رائعاً معاً'}
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="contact-form">
              <div className="mb-3">
                <label className="form-label">{lang === 'en' ? 'Name' : 'الاسم'}</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">{lang === 'en' ? 'Email' : 'البريد الإلكتروني'}</label>
                <input
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">{lang === 'en' ? 'Message' : 'الرسالة'}</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading
                  ? (lang === 'en' ? 'Sending…' : 'جاري الإرسال…')
                  : (lang === 'en' ? 'Send Message' : 'إرسال الرسالة')}
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div className="contact-details">
                  <h4>{lang === 'en' ? 'Email' : 'البريد الإلكتروني'}</h4>
                  <p>mohamed.sayed4898@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                <div className="contact-details">
                  <h4>{lang === 'en' ? 'Phone' : 'الهاتف'}</h4>
                  <p>+201050336677</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-details">
                  <h4>{lang === 'en' ? 'Location' : 'الموقع'}</h4>
                  <p>{lang === 'en' ? 'Cairo, Egypt' : 'القاهرة، مصر'}</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/mohamed-sayed13" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/M-SayedCoder" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/megooz9__" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/share/1CHQpyXWca/" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
