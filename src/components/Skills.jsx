import { useEffect, useRef, useState } from 'react'
import { technicalSkills, softSkills } from '../data'

function SkillItem({ name, percent, animated }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span className="skill-percent">{percent}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: animated ? `${percent}%` : '0%', transition: 'width 1s ease' }}
        ></div>
      </div>
    </div>
  )
}

function SkillSection({ id, subtitle, title, categories, lang }) {
  const sectionRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setAnimated(true)
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills-section" id={id} ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">{subtitle}</span>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="row">
          {categories.map((cat, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="skills-category">
                <h3 className="category-title">
                  <i className={cat.icon}></i>{' '}
                  <span>{lang === 'en' ? cat.category.en : cat.category.ar}</span>
                </h3>
                {cat.skills.map((skill, j) => (
                  <SkillItem
                    key={j}
                    name={skill.name ?? (lang === 'en' ? skill.en : skill.ar)}
                    percent={skill.percent}
                    animated={animated}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Skills({ lang }) {
  return (
    <>
      <SkillSection
        id="Technical-skills"
        subtitle={lang === 'en' ? 'My Skills' : 'مهاراتي'}
        title={lang === 'en' ? 'Technical Skills' : 'المهارات التقنية'}
        categories={technicalSkills}
        lang={lang}
      />
      <SkillSection
        id="soft-skills"
        subtitle={lang === 'en' ? 'Interpersonal & Leadership' : 'التواصل والقيادة'}
        title={lang === 'en' ? 'Soft Skills' : 'المهارات الشخصية'}
        categories={softSkills}
        lang={lang}
      />
    </>
  )
}
