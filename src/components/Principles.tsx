import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/context'

function Principles() {
  const { t } = useLanguage()

  return (
    <section id="approach" className="section" aria-labelledby="approach-heading">
      <div className="container">
        <SectionHeading
          number="03"
          label={t.ui.sections.approach}
          id="approach-heading"
        />
        <ul>
          {t.principles.map((principle, index) => (
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
