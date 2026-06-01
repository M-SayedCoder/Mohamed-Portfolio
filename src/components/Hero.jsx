import { useEffect, useRef } from 'react'
import { typingPhrases } from '../data'
import heroPhoto from '../assets/images/photo_2025-04-21_23-45-50.jpg'
import cvFile from '../assets/images/CV.pdf'

export default function Hero({ lang }) {
  const typingRef = useRef(null)
  const canvasRef = useRef(null)
  const cardRef = useRef(null)

  // Typing effect
  useEffect(() => {
    let phraseIndex = 0, charIndex = 0, isDeleting = false
    let timer

    function typeEffect() {
      const el = typingRef.current
      if (!el) return
      const current = typingPhrases[phraseIndex]
      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1)
        charIndex--
      } else {
        el.textContent = current.substring(0, charIndex + 1)
        charIndex++
      }
      if (!isDeleting && charIndex === current.length) {
        isDeleting = true
        timer = setTimeout(typeEffect, 2000)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % typingPhrases.length
        timer = setTimeout(typeEffect, 500)
      } else {
        timer = setTimeout(typeEffect, isDeleting ? 45 : 90)
      }
    }
    timer = setTimeout(typeEffect, 500)
    return () => clearTimeout(timer)
  }, [])

  // Aurora WebGL background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const vert = `
      attribute vec2 a_position;
      void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
    `
    const frag = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;

      float noise(vec2 p) {
        return sin(p.x * 2.1 + u_time * 0.4) * sin(p.y * 1.7 + u_time * 0.3)
             + sin(p.x * 3.3 - u_time * 0.2) * cos(p.y * 2.9 + u_time * 0.5) * 0.5
             + cos(p.x * 1.4 + u_time * 0.6) * sin(p.y * 3.8 - u_time * 0.35) * 0.3;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        uv.x *= u_resolution.x / u_resolution.y;

        float n = noise(uv * 1.8);
        n = n * 0.5 + 0.5;

        vec3 c1 = vec3(0.18, 0.89, 0.63);  // primary green #4BE3A1
        vec3 c2 = vec3(0.27, 0.25, 1.0);   // purple #6C63FF
        vec3 c3 = vec3(0.02, 0.02, 0.06);  // near black

        float band1 = smoothstep(0.0, 0.5, n);
        float band2 = smoothstep(0.5, 1.0, n);
        vec3 col = mix(c3, c2, band1);
        col = mix(col, c1, band2 * 0.55);

        float alpha = n * 0.18 + 0.02;
        gl_FragColor = vec4(col, alpha);
      }
    `

    function compileShader(type, src) {
      const s = gl.createShader(type)
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const program = gl.createProgram()
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vert))
    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, frag))
    gl.linkProgram(program)
    gl.useProgram(program)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(program, 'u_time')
    const uRes = gl.getUniformLocation(program, 'u_resolution')

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    let animId, start = null
    function frame(ts) {
      if (!start) start = ts
      const t = (ts - start) / 1000
      gl.uniform1f(uTime, t)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animId = requestAnimationFrame(frame)
    }
    animId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // 3D Profile card tilt on mouse move
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      const maxTilt = 14
      const rotateY = dx * maxTilt
      const rotateX = -dy * maxTilt
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`
    }
    const handleLeave = () => {
      card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  const scrollToProjects = e => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid"></div>
        {/* Aurora canvas replaces particle canvas */}
        <canvas id="auroraCanvas" ref={canvasRef}></canvas>
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 hero-content">
            <span className="greeting">
              {lang === 'en' ? "Hi, I'm Mohamed Sayed" : 'مرحباً، أنا محمد سيد'}
            </span>
            <h1 className="hero-title">
              {lang === 'en' ? 'Full Stack Developer' : 'مطور ويب متكامل'}
            </h1>
            <p className="hero-text">
              <span className="typing-text" ref={typingRef}></span>
              <span className="cursor">|</span>
            </p>
            <p className="usp-text">
              {lang === 'en'
                ? 'I help businesses build secure and scalable backend systems using Django and REST APIs to transform complex ideas into powerful web solutions.'
                : 'أساعد الشركات على بناء أنظمة خلفية آمنة وقابلة للتوسع باستخدام Django وREST APIs لتحويل الأفكار المعقدة إلى حلول ويب قوية.'}
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary btn-glow" onClick={scrollToProjects}>
                {lang === 'en' ? 'View Projects' : 'عرض المشاريع'}
              </a>
              <a href={cvFile} className="btn btn-outline" download>
                <i className="fas fa-download"></i>{' '}
                {lang === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية'}
              </a>
            </div>
          </div>
          <div className="col-lg-6 hero-image-container">
            {/* 3D tilt card */}
            <div className="hero-card-3d" ref={cardRef}>
              <div className="hero-image-wrapper">
                <div className="hero-image-ring"></div>
                <div className="hero-image-bg"></div>
                <img src={heroPhoto} alt="Mohamed Sayed" className="hero-image" />
              </div>
              <div className="hero-card-shine"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>{lang === 'en' ? 'Scroll' : 'تمرير'}</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}
