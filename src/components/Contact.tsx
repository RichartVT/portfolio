import { contactIntro, contactLinks } from '../data/cv'

function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading">Contact</h2>
        <p>{contactIntro}</p>
        <ul className="contact__list">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <span className="contact__label">{link.label}</span>
              <a href={link.href} rel="noreferrer">
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
