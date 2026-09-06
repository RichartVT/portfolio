import { projects } from '../data/cv'

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading">Projects</h2>
        <ul className="grid">
          {projects.map((project, index) => (
            <li key={index}>
              <article className="card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label={`Technologies used in ${project.name}`}>
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.url ? (
                  <a href={project.url} rel="noreferrer">
                    View {project.name}
                  </a>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
