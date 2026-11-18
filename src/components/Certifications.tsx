import { useLanguage } from '../i18n/context'

/** Course certificates as a grid; each card opens the document itself. */
function Certifications() {
  const { t, lang } = useLanguage()
  const { training, ui } = t
  const month = new Intl.DateTimeFormat(lang === 'es' ? 'es-MX' : 'en-US', {
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="certs">
      <h3 className="certs__heading">{training.heading}</h3>
      <p className="certs__intro">{training.intro}</p>
      <ul className="certs__grid">
        {training.items.map((cert) => (
          <li key={cert.href}>
            <a
              className="cert"
              href={cert.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="cert__thumb">
                <img
                  src={cert.image}
                  alt=""
                  width={640}
                  height={460}
                  loading="lazy"
                  decoding="async"
                  data-badge={cert.verifiedOn ? '' : undefined}
                />
              </span>
              <span className="cert__body">
                <span className="cert__title">{cert.title}</span>
                <span className="cert__meta">
                  {cert.issuer} ·{' '}
                  {month.format(new Date(cert.date.year, cert.date.month - 1))}
                </span>
                <span className="cert__link">
                  {cert.verifiedOn ? ui.verifyOn(cert.verifiedOn) : ui.viewCertificate}
                  <span aria-hidden="true">↗</span>
                  <span className="visually-hidden">{ui.opensInNewTab}</span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Certifications
