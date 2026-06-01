import { useState } from 'react'
import { projects } from '../data'

const filters = [
  { key: 'all', en: 'All', ar: 'الكل' },
  { key: 'frontend', en: 'Frontend', ar: 'فرونت إند' },
  { key: 'backend', en: 'Backend', ar: 'باك إند' },
  { key: 'fullstack', en: 'Full Stack', ar: 'فول ستاك' },
]

function getImg(imgName) {
  if (!imgName) return null
  // Dynamic import via new URL for Vite
  return new URL(`../assets/images/${imgName}`, import.meta.url).href
}

export default function Projects({ lang }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">{lang === 'en' ? 'Projects' : 'المشاريع'}</span>
          <h2 className="section-title">{lang === 'en' ? 'Featured Work' : 'أبرز الأعمال'}</h2>
        </div>

        <div className="project-filters" id="projectFilters">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {lang === 'en' ? f.en : f.ar}
            </button>
          ))}
        </div>

        <div className="row" id="projectsRow">
          {filtered.map(project => (
            <div key={project.id} className="col-lg-4 col-md-6 project-item">
              <div className="project-card">
                <div className="project-image">
                  {project.image ? (
                    <img src={getImg(project.image)} alt={project.title.en} />
                  ) : (
                    <div className="devkit-placeholder">
                      <div className="devkit-thumb">
                        <span className="devkit-hex">⬡</span>
                        <span className="devkit-label">DevKit</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{lang === 'en' ? project.title.en : project.title.ar}</h3>
                  <p className="project-description">{lang === 'en' ? project.desc.en : project.desc.ar}</p>
                  <button className="btn btn-project" onClick={() => setSelectedProject(project)}>
                    <span>{lang === 'en' ? 'View Details' : 'عرض التفاصيل'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }} onClick={() => setSelectedProject(null)}>
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {lang === 'en' ? selectedProject.title.en : selectedProject.title.ar}
                </h5>
                <button type="button" className="btn-close" onClick={() => setSelectedProject(null)}></button>
              </div>
              <div className="modal-body">
                <div className="case-study">
                  <h6><strong>{lang === 'en' ? 'Problem:' : 'المشكلة:'}</strong></h6>
                  <p>{lang === 'en' ? selectedProject.problem.en : selectedProject.problem.ar}</p>
                  <h6><strong>{lang === 'en' ? 'Solution:' : 'الحل:'}</strong></h6>
                  <p>{lang === 'en' ? selectedProject.solution.en : selectedProject.solution.ar}</p>
                  <h6><strong>{lang === 'en' ? 'Tech Stack:' : 'التقنيات المستخدمة:'}</strong></h6>
                  <div className="tech-tags">
                    {selectedProject.stack.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-github">
                    <i className="fab fa-github"></i>{' '}
                    <span>{lang === 'en' ? 'View on GitHub' : 'عرض على GitHub'}</span>
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn btn-github">
                    <i className="fas fa-globe"></i>{' '}
                    <span>{lang === 'en' ? 'View on Website' : 'عرض الموقع'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
