import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Principles from './components/Principles'
import Projects from './components/Projects'
import SectionHeading from './components/SectionHeading'
import Skills from './components/Skills'
import { journey, profile, training } from './data/cv'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <Hero />

        {/* Work leads: with no employment history, the projects are the
            evidence, so they get the first and most valuable slot. */}
        <Projects />

        <section id="story" className="section" aria-labelledby="story-heading">
          <div className="container">
            <SectionHeading number="02" label="My Story" id="story-heading" />
            <div className="prose">
              {profile.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

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
            <SectionHeading number="05" label="Journey" id="journey-heading" />
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
                  </div>
                </li>
              ))}

              {/* Training rides along as one compact entry rather than a
                  certificate per line. */}
              <li className="entry">
                <div className="entry__rail">
                  <p className="entry__period">{training.period}</p>
                </div>
                <div className="entry__body">
                  <h3 className="entry__title">{training.heading}</h3>
                  <ul className="entry__bullets">
                    {training.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ol>
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
