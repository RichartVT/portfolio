import { profile } from '../data/cv'

function Hero() {
  return (
    <section id="hero" className="section hero" aria-labelledby="hero-heading">
      <div className="container">
        <p className="hero__eyebrow">{profile.title}</p>
        <h1 id="hero-heading">{profile.name}</h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__location">{profile.location}</p>
        <a className="button" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero
