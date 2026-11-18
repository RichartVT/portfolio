import { useRef, useState, type PointerEvent } from 'react'
import { languages } from '../data/cv'
import { useLanguage } from '../i18n/context'

/** Movement (px) before a press counts as a drag rather than a tap. */
const DRAG_THRESHOLD = 4

type DragState = {
  startX: number
  startOffset: number
  /** Distance the thumb can travel: one option's width. */
  travel: number
  moved: boolean
}

/**
 * Two real buttons (so taps, keyboard and screen readers work as usual) with a
 * sliding thumb behind them. Dragging the thumb switches language live as it
 * crosses the midpoint; letting go snaps it to the nearest side.
 */
function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage()
  const thumbRef = useRef<HTMLSpanElement>(null)
  const drag = useRef<DragState | null>(null)
  const [dragOffset, setDragOffset] = useState<number | null>(null)

  const activeIndex = Math.max(
    0,
    languages.findIndex((option) => option.code === lang),
  )

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || !thumbRef.current) return
    const travel = thumbRef.current.offsetWidth
    drag.current = {
      startX: event.clientX,
      startOffset: activeIndex * travel,
      travel,
      moved: false,
    }
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const state = drag.current
    if (!state) return
    const dx = event.clientX - state.startX
    if (!state.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return
      state.moved = true
      // Capture only once it is a real drag, so a plain tap still lands on
      // the button underneath.
      try {
        event.currentTarget.setPointerCapture(event.pointerId)
      } catch {
        // Pointer already gone; the drag still works while over the switch.
      }
    }

    const offset = Math.min(Math.max(state.startOffset + dx, 0), state.travel)
    setDragOffset(offset)

    const nearest = languages[Math.round(offset / state.travel)]
    if (nearest && nearest.code !== lang) setLang(nearest.code)
  }

  function endDrag() {
    drag.current = null
    setDragOffset(null)
  }

  const thumbTransform =
    dragOffset === null
      ? `translateX(${activeIndex * 100}%)`
      : `translateX(${dragOffset}px)`

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={t.ui.languageSwitch}
      data-dragging={dragOffset !== null || undefined}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <span
        ref={thumbRef}
        className="lang-switch__thumb"
        style={{ transform: thumbTransform }}
        aria-hidden="true"
      />
      {languages.map((option) => (
        <button
          key={option.code}
          type="button"
          className="lang-switch__option"
          lang={option.code}
          aria-label={option.name}
          aria-pressed={lang === option.code}
          onClick={() => setLang(option.code)}
        >
          {option.short}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
