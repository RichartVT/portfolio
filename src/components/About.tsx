import { useState } from 'react'
import Lightbox from './Lightbox'
import SectionHeading from './SectionHeading'
import { portrait, portraitSrcSet, type Interest } from '../data/cv'
import { useLanguage } from '../i18n/context'

/** Simple line icons drawn in currentColor so they follow the theme. */
function InterestIcon({ icon }: { icon: Interest['icon'] }) {
  const paths: Record<Interest['icon'], React.ReactNode> = {
    learn: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
      </>
    ),
    gym: (
      <>
        <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />
      </>
    ),
    bike: (
      <>
        <circle cx="5.5" cy="16.5" r="3.5" />
        <circle cx="18.5" cy="16.5" r="3.5" />
        <path d="M5.5 16.5 9 9h6l3.5 7.5M9 9 12 16.5h-1M14 6h2.5" />
      </>
    ),
    football: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m12 7.5 4 2.9-1.5 4.7h-5L8 10.4z" />
        <path d="M12 3v4.5M20.6 9.6l-4.6.8M17.3 19.3l-2.8-4.2M6.7 19.3l2.8-4.2M3.4 9.6l4.6.8" />
      </>
    ),
  }
  return (
    <svg className="interest__icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[icon]}
    </svg>
  )
}

function About() {
  const { t } = useLanguage()
  const { about } = t
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading number="03" label={t.ui.sections.about} id="about-heading" />

        <div className="about">
          <img
            className="about__portrait"
            src={portrait}
            srcSet={portraitSrcSet}
            // Half the content width beside the text on desktop, full width
            // on phones; the browser picks 800w or 1600w for the screen.
            sizes="(min-width: 48em) 40vw, 100vw"
            alt={about.portraitAlt}
            width={1600}
            height={1580}
            loading="lazy"
            decoding="async"
          />

          <div className="about__body">
            <p className="about__intro">{about.intro}</p>
            <ul className="interests">
              {about.interests.map((interest) => (
                <li key={interest.icon} className="interest">
                  <InterestIcon icon={interest.icon} />
                  <div>
                    <h3 className="interest__title">{interest.title}</h3>
                    <p className="interest__body">{interest.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="gallery__heading">{about.galleryHeading}</h3>
        <ul className="gallery">
          {about.gallery.map((item, index) => (
            <li key={item.src}>
              <button
                type="button"
                className="gallery__item"
                onClick={() => setOpen(index)}
                aria-label={item.kind === 'video' ? `${t.ui.playVideo}: ${item.alt}` : item.alt}
              >
                <img
                  src={item.kind === 'image' ? item.thumb : item.poster}
                  alt=""
                  width={640}
                  height={item.kind === 'image' ? 853 : 1138}
                  loading="lazy"
                  decoding="async"
                />
                {item.kind === 'video' ? (
                  <span className="gallery__play" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5.5v13l11-6.5z" />
                    </svg>
                  </span>
                ) : null}
                <span className="gallery__caption">{item.caption}</span>
              </button>
            </li>
          ))}
        </ul>

        <Lightbox items={about.gallery} index={open} onChange={setOpen} />
      </div>
    </section>
  )
}

export default About
