import SectionHeading from './SectionHeading'
import { principles } from '../data/cv'

function Principles() {
  return (
    <section id="approach" className="section" aria-labelledby="approach-heading">
      <div className="container">
        <SectionHeading number="03" label="How I Work" id="approach-heading" />
        <ul>
          {principles.map((principle, index) => (
            <li key={index} className="entry">
              <div className="entry__rail">
                <h3 className="entry__label">{principle.title}</h3>
              </div>
              <div className="entry__body">
                <p className="entry__org">{principle.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Principles
