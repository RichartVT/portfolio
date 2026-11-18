import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import { mernStack, techCatalog } from '../data/tech'
import { useLanguage } from '../i18n/context'

function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          number="05"
          label={t.ui.sections.skills}
          id="skills-heading"
        />
        <ul>
          {/* The full-stack combination gets its own row: it is the stack the
              projects are actually built on, not just four separate tools. */}
          <li className="entry">
            <div className="entry__rail">
              <h3 className="entry__label">{t.ui.stackHeading}</h3>
            </div>
            <div className="entry__body">
              <div className="stack-card">
                <span className="stack-card__logos" aria-hidden="true">
                  {mernStack.map((id) => (
                    <span key={id} className="stack-card__logo">
                      <TechIcon id={id} size={22} />
                    </span>
                  ))}
                </span>
                <span className="stack-card__text">
                  <span className="stack-card__name">MERN</span>
                  <span className="stack-card__caption">{t.ui.mernCaption}</span>
                </span>
              </div>
            </div>
          </li>

          {t.skills.map((group, index) => (
            <li key={index} className="entry">
              <div className="entry__rail">
                <h3 className="entry__label">{group.category}</h3>
              </div>
              <div className="entry__body">
                <ul className="tags">
                  {group.items.map((id) => (
                    <li key={id} className="tag">
                      <TechIcon id={id} size={18} />
                      {techCatalog[id]}
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
