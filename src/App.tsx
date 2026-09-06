import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
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
          <div className="container prose">
            <h2 id="about-heading">About</h2>
            {profile.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
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
            <h2 id="education-heading">Education</h2>
            <ol className="timeline">
              {education.map((study, index) => (
                <li key={index}>
                  <article className="card">
                    <h3>{study.qualification}</h3>
                    <p className="card__meta">{study.institution}</p>
                    <p className="card__period">{study.period}</p>
                  </article>
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
