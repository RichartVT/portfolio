import { avatar } from '../data/cv'
import { useLanguage } from '../i18n/context'

function Hero() {
  const { t } = useLanguage()
  const { profile, ui } = t

  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__lead">
          <img
            className="hero__avatar"
            src={avatar}
            alt={profile.name}
            width={64}
            height={64}
            fetchPriority="high"
          />
          <p className="eyebrow">{profile.title}</p>
          <h1 id="hero-heading">{profile.name}</h1>
          <p className="hero__statement">{profile.tagline}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              {ui.getInTouch}
            </a>
            <a className="button button--ghost" href={ui.cvFile} download>
              {ui.downloadCv} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside className="hero__meta" aria-label={ui.profileDetails}>
          <dl>
            <div className="meta__row">
              <dt className="meta__label">{ui.location}</dt>
              <dd className="meta__value">{profile.location}</dd>
            </div>

            <div className="meta__row">
              <dt className="meta__label">{ui.studying}</dt>
              <dd className="meta__value">{profile.status}</dd>
            </div>

            <div className="meta__row">
              <dt className="meta__label">{ui.lookingFor}</dt>
              <dd className="meta__value">{profile.objective}</dd>
            </div>

            <div className="meta__row">
              <dt className="meta__label">{ui.elsewhere}</dt>
              <dd className="meta__value">
                <ul className="meta__links">
                  {t.contactLinks.map((link) => {
                    // Same rule as Projects and Contact: placeholder hrefs
                    // render as plain text with no affordance.
                    const href =
                      link.href && link.href !== '#' ? link.href : undefined
                    const isExternal = href?.startsWith('http') ?? false

                    return (
                      <li key={link.href}>
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
                                {ui.opensInNewTab}
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
