import { useEffect, useState, useRef } from 'react'
import { navLinks } from '../data'

export default function Navbar({ lang, setLang, theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  // Navbar blur on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (!e.target.closest('.navbar')) setMenuOpen(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top${scrolled ? ' scrolled' : ''}`} id="navbar-example">
        <div className="container">
          <a className="navbar-brand" href="#" onClick={e => handleNavClick(e, '#home')}>
            <span className="logo">MS</span>
          </a>

          {/* Animated Hamburger */}
          <button
            className={`hamburger-btn${menuOpen ? ' open' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className="ham-line"></span>
            <span className="ham-line"></span>
            <span className="ham-line"></span>
          </button>

          {/* Desktop nav */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navLinks.map(link => (
                <li key={link.href} className="nav-item">
                  <a
                    className={`nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                  >
                    {lang === 'en' ? link.en : link.ar}
                  </a>
                </li>
              ))}
            </ul>
            <div className="navbar-controls">
              <button className="ctrl-btn lang-btn" onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')} title="Switch Language">
                <span className={`lang-en${lang === 'en' ? ' active' : ''}`}>EN</span>
                <span className={`lang-ar${lang === 'ar' ? ' active' : ''}`}>ع</span>
              </button>
              <button className="ctrl-btn theme-btn" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} title="Toggle Theme">
                <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
              </button>
            </div>
          </div>

          {/* Mobile controls visible always */}
          <div className="navbar-controls d-flex d-lg-none me-2">
            <button className="ctrl-btn lang-btn" onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')} title="Switch Language">
              <span className={`lang-en${lang === 'en' ? ' active' : ''}`}>EN</span>
              <span className={`lang-ar${lang === 'ar' ? ' active' : ''}`}>ع</span>
            </button>
            <button className="ctrl-btn theme-btn" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} title="Toggle Theme">
              <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      <div className={`mobile-menu-overlay${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link, i) => (
            <li key={link.href} className="mobile-nav-item" style={{ '--i': i }}>
              <a
                className={`mobile-nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
              >
                {lang === 'en' ? link.en : link.ar}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
