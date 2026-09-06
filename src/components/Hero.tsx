import { contactLinks, experience, profile } from '../data/cv'

function Hero() {
  const current = experience[0]

  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__lead">
          <p className="eyebrow">{profile.title}</p>
          <h1 id="hero-heading">{profile.name}</h1>
          <p className="hero__statement">{profile.tagline}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Get in touch
            </a>
            <a className="button button--ghost" href="#projects">
              View work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside className="hero__meta" aria-label="Profile details">
          <dl>
            <div className="meta__row">
              <dt className="meta__label">Location</dt>
              <dd className="meta__value">{profile.location}</dd>
            </div>

            {current ? (
              <div className="meta__row">
                <dt className="meta__label">Currently</dt>
                <dd className="meta__value">
                  {current.role}
                  <span className="meta__sub">{current.company}</span>
                </dd>
              </div>
            ) : null}

            <div className="meta__row">
              <dt className="meta__label">Elsewhere</dt>
              <dd className="meta__value">
                <ul className="meta__links">
                  {contactLinks.map((link) => {
                    // Same rule as Projects and Contact: placeholder hrefs
                    // render as plain text with no affordance.
                    const href =
                      link.href && link.href !== '#' ? link.href : undefined
                    const isExternal = href?.startsWith('http') ?? false

                    return (
                      <li key={link.label}>
                        {href ? (
                          <a
                            href={href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noreferrer' : undefined}
                          >
                            {link.label}
                            <span aria-hidden="true">↗</span>
                            {isExternal ? (
                              <span className="visually-hidden">
                                (opens in a new tab)
                              </span>
                            ) : null}
                          </a>
                        ) : (
                          link.label
                        )}
                      </li>
                    )
                  })}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

export default Hero
