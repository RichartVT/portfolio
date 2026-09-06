import SectionHeading from './SectionHeading'
import { projects } from '../data/cv'

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeading number="03" label="Projects" id="projects-heading" />
        <ol>
          {projects.map((project, index) => {
            // Placeholder URLs ('#', or none) get no link and no affordance —
            // an arrow that goes nowhere is worse than no arrow.
            const href =
              project.url && project.url !== '#' ? project.url : undefined
            const isExternal = href?.startsWith('http') ?? false

            return (
              <li key={index} className="project">
                <span className="project__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="project__body">
                  <h3 className="project__name">
                    {href ? (
                      <a
                        href={href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                      >
                        {project.name}
                        <span className="project__arrow" aria-hidden="true">
                          ↗
                        </span>
                        {isExternal ? (
                          <span className="visually-hidden">
                            (opens in a new tab)
                          </span>
                        ) : null}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="project__description">{project.description}</p>
                  <ul
                    className="techlist"
                    aria-label={`Technologies used in ${project.name}`}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Projects
