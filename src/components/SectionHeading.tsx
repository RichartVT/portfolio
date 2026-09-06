type SectionHeadingProps = {
  /** Editorial marker, e.g. "02". Decorative — hidden from assistive tech. */
  number: string
  label: string
  /** Wired to each section's aria-labelledby. */
  id: string
}

function SectionHeading({ number, label, id }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <span className="section-head__num" aria-hidden="true">
        {number}
      </span>
      <h2 id={id}>{label}</h2>
    </div>
  )
}

export default SectionHeading
