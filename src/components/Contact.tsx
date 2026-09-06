import SectionHeading from './SectionHeading'
import { contactIntro, contactLinks } from '../data/cv'

function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading number="06" label="Contact" id="contact-heading" />
        <p className="contact__intro">{contactIntro}</p>
        <ul>
          {contactLinks.map((link) => {
            // Same rule as Projects: placeholder hrefs render as plain text.
            const href = link.href && link.href !== '#' ? link.href : undefined
            const isExternal = href?.startsWith('http') ?? false

            return (
              <li key={link.label} className="contact__row">
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
                          (opens in a new tab)
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
