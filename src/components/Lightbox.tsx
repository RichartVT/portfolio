import { useEffect, useRef } from 'react'
import type { MediaItem } from '../data/cv'
import { useLanguage } from '../i18n/context'

type LightboxProps = {
  items: MediaItem[]
  /** Open item, or null when closed. */
  index: number | null
  onChange: (index: number | null) => void
}

/**
 * Full-screen viewer on the native <dialog>: focus trapping, Esc to close and
 * the inert background come from the browser. Arrow keys step through items.
 */
function Lightbox({ items, index, onChange }: LightboxProps) {
  const { t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const open = index !== null
  const item = open ? items[index] : undefined

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  function step(delta: number) {
    if (index === null) return
    onChange((index + delta + items.length) % items.length)
  }

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={item?.alt}
      onClose={() => onChange(null)}
      // A click on the backdrop lands on the dialog itself.
      onClick={(event) => {
        if (event.target === event.currentTarget) onChange(null)
      }}
    >
      {item ? (
        <figure className="lightbox__figure">
          {item.kind === 'image' ? (
            <img src={item.src} alt={item.alt} className="lightbox__media" />
          ) : (
            <video
              key={item.src}
              src={item.src}
              poster={item.poster}
              className="lightbox__media"
              aria-label={item.alt}
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          )}
          <figcaption className="lightbox__caption">
            {item.caption}
            <span className="lightbox__count">
              {index! + 1} / {items.length}
            </span>
          </figcaption>
        </figure>
      ) : null}

      <button
        type="button"
        className="lightbox__close"
        aria-label={t.ui.closeDialog}
        onClick={() => onChange(null)}
      >
        ×
      </button>
      {items.length > 1 ? (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label={t.ui.previous}
            onClick={() => step(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label={t.ui.next}
            onClick={() => step(1)}
          >
            ›
          </button>
        </>
      ) : null}
    </dialog>
  )
}

export default Lightbox
