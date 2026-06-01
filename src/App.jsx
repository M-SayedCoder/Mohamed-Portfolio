import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Services from './components/Services'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'

export default function App() {
  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState('dark')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showIntro, setShowIntro] = useState(true)

  // Apply theme via class (CSS uses body.light-mode)
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
    }
  }, [theme])

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  // Scroll progress bar + back to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setShowBackToTop(scrollTop > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Custom cursor
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot')
    const ring = document.querySelector('.cursor-ring')
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0
    let animId

    const onMove = e => {
      mouseX = e.clientX; mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`
      animId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animate()
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Custom cursor */}
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>

      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <Intro onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main content - only shown after intro */}
      {!showIntro && (
        <>
          <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />

          <main>
            <Hero lang={lang} />
            <About lang={lang} />
            <Skills lang={lang} />
            <Experience lang={lang} />
            <Services lang={lang} />
            <Projects lang={lang} />
            <Certifications lang={lang} />
            <Testimonials lang={lang} />
            <Contact lang={lang} />
          </main>

          <Footer lang={lang} />

          {/* Back to Top */}
          {showBackToTop && (
            <button
              className="back-to-top"
              style={{ display: 'flex' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          )}

          {/* WhatsApp Float */}
          <a href="https://wa.me/201050336677" target="_blank" rel="noreferrer" className="whatsapp-float" id="whatsappBtn">
            <i className="fab fa-whatsapp"></i>
            <span className="whatsapp-tooltip">Chat with me!</span>
          </a>
        </>
      )}
    </>
  )
}
