import SectionHeading from './SectionHeading'
import { projects } from '../data/cv'

/** Placeholder or missing URLs get no link — an arrow that goes nowhere is
 *  worse than no arrow. */
function realHref(url?: string) {
  return url && url !== '#' ? url : undefined
}

function Projects() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="container">
        <SectionHeading number="01" label="Selected Work" id="work-heading" />
        <ol>
          {projects.map((project, index) => {
            const repo = realHref(project.repo)
            const demo = realHref(project.demo)

            return (
              <li key={index} className="project">
                <span className="project__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="project__body">
                  <h3 className="project__name">{project.name}</h3>
                  <p className="project__context">{project.context}</p>
                  <p className="project__description">{project.description}</p>
                  {project.learned ? (
                    <p className="project__learned">{project.learned}</p>
                  ) : null}
                  <ul
                    className="techlist"
                    aria-label={`Technologies used in ${project.name}`}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                  {repo || demo ? (
                    <ul className="project__links">
                      {repo ? (
                        <li>
                          <a href={repo} target="_blank" rel="noreferrer">
                            Code
                            <span aria-hidden="true">↗</span>
                            <span className="visually-hidden">
                              for {project.name} (opens in a new tab)
                            </span>
                          </a>
                        </li>
                      ) : null}
                      {demo ? (
                        <li>
                          <a href={demo} target="_blank" rel="noreferrer">
                            Live demo
                            <span aria-hidden="true">↗</span>
                            <span className="visually-hidden">
                              of {project.name} (opens in a new tab)
                            </span>
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  ) : null}
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
