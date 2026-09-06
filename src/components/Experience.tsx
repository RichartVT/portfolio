import SectionHeading from './SectionHeading'
import { experience } from '../data/cv'

function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <SectionHeading number="02" label="Experience" id="experience-heading" />
        <ol>
          {experience.map((job, index) => (
            <li key={index} className="entry">
              <div className="entry__rail">
                <p className="entry__period">{job.period}</p>
                <p className="entry__location">{job.location}</p>
              </div>
              <div className="entry__body">
                <h3 className="entry__title">{job.role}</h3>
                <p className="entry__org">{job.company}</p>
                <ul className="entry__bullets">
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
