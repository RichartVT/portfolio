import About from './components/About'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Principles from './components/Principles'
import Projects from './components/Projects'
import SectionHeading from './components/SectionHeading'
import Skills from './components/Skills'
import { useLanguage } from './i18n/context'
import './App.css'

function App() {
  const { t } = useLanguage()
  const { journey, profile } = t

  return (
    <>
      <a className="skip-link" href="#main">
        {t.ui.skipLink}
      </a>
      <Header />

      <main id="main">
        <Hero />

        {/* Work leads: with no employment history, the projects are the
            evidence, so they get the first and most valuable slot. */}
        <Projects />

        <section id="story" className="section" aria-labelledby="story-heading">
          <div className="container">
            <SectionHeading number="02" label={t.ui.sections.story} id="story-heading" />
            <div className="prose">
              {profile.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <About />
        <Principles />
        <Skills />

        {/* Formal study and self-directed learning share one timeline — that
            parallel is the point of the section. */}
        <section
          id="journey"
          className="section"
          aria-labelledby="journey-heading"
        >
          <div className="container">
            <SectionHeading number="06" label={t.ui.sections.journey} id="journey-heading" />
            <ol>
              {journey.map((study, index) => (
                <li key={index} className="entry">
                  <div className="entry__rail">
                    <p className="entry__period">{study.period}</p>
                    <p className="entry__label">{study.track}</p>
                  </div>
                  <div className="entry__body">
                    <h3 className="entry__title">{study.qualification}</h3>
                    {study.institution ? (
                      <p className="entry__org">{study.institution}</p>
                    ) : null}
                    {study.detail ? (
                      <p className="entry__detail">{study.detail}</p>
                    ) : null}
                    {study.items ? (
                      <ul className="techlist">
                        {study.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {study.proof ? (
                      <a
                        className="entry__proof"
                        href={study.proof}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t.ui.viewDocument}
                        <span aria-hidden="true">↗</span>
                        <span className="visually-hidden">
                          {t.ui.opensInNewTab}
                        </span>
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>

            <Certifications />
          </div>
        </section>

        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
