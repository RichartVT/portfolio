import SectionHeading from './SectionHeading'
import { skills } from '../data/cv'

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading number="04" label="Skills" id="skills-heading" />
        <ul>
          {skills.map((group, index) => (
            <li key={index} className="entry">
              <div className="entry__rail">
                <h3 className="entry__label">{group.category}</h3>
              </div>
              <div className="entry__body">
                <ul className="tags">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
