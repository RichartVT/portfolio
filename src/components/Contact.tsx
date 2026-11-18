import SectionHeading from './SectionHeading'
import { useLanguage } from '../i18n/context'

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading
          number="06"
          label={t.ui.sections.contact}
          id="contact-heading"
        />
        <p className="contact__intro">{t.contactIntro}</p>
        <ul>
          {t.contactLinks.map((link) => {
            // Same rule as Projects: placeholder hrefs render as plain text.
            const href = link.href && link.href !== '#' ? link.href : undefined
            const isExternal = href?.startsWith('http') ?? false

            return (
              <li key={link.href} className="contact__row">
                <span className="contact__label">{link.label}</span>
                <span className="contact__value">
                  {href ? (
                    <a
                      href={href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                    >
                      {link.value}
                      <span aria-hidden="true">↗</span>
                      {isExternal ? (
                        <span className="visually-hidden">
                          {t.ui.opensInNewTab}
                        </span>
                      ) : null}
                    </a>
                  ) : (
                    link.value
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Contact
