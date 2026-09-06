import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SectionHeading from './components/SectionHeading'
import Skills from './components/Skills'
import { education, profile } from './data/cv'
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

        <section id="about" className="section" aria-labelledby="about-heading">
          <div className="container">
            <SectionHeading number="01" label="About" id="about-heading" />
            <div className="prose">
              {profile.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <Experience />
        <Projects />
        <Skills />

        <section
          id="education"
          className="section"
          aria-labelledby="education-heading"
        >
          <div className="container">
            <SectionHeading
              number="05"
              label="Education"
              id="education-heading"
            />
            <ol>
              {education.map((study, index) => (
                <li key={index} className="entry">
                  <div className="entry__rail">
                    <p className="entry__period">{study.period}</p>
                  </div>
                  <div className="entry__body">
                    <h3 className="entry__title">{study.qualification}</h3>
                    <p className="entry__org">{study.institution}</p>
                  </div>
                </li>
              ))}
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
