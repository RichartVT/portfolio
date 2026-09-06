import { skills } from '../data/cv'

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading">Skills</h2>
        <ul className="grid">
          {skills.map((group, index) => (
            <li key={index}>
              <article className="card">
                <h3>{group.category}</h3>
                <ul className="tags">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
