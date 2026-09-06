import { experience } from '../data/cv'

function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <h2 id="experience-heading">Experience</h2>
        <ol className="timeline">
          {experience.map((job, index) => (
            <li key={index}>
              <article className="card">
                <h3>{job.role}</h3>
                <p className="card__meta">
                  {job.company} · {job.location}
                </p>
                <p className="card__period">{job.period}</p>
                <ul className="card__bullets">
                  {job.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
