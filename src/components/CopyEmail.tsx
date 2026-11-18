import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/context'

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Older browsers or a non-secure context: fall back to a hidden textarea.
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    area.remove()
    return ok
  }
}

/** Icon button that copies the address and confirms in place. */
function CopyEmail({ email }: { email: string }) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function onClick() {
    if (!(await copyText(email))) return
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      className="copy-email"
      onClick={onClick}
      data-copied={copied || undefined}
    >
      <svg
        className="copy-email__icon"
        viewBox="0 0 24 24"
        width="14"
        height="14"
        aria-hidden="true"
      >
        {copied ? (
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        ) : (
          <>
            <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
            <path d="M15.5 8.5V6.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2" />
          </>
        )}
      </svg>
      {/* Visible label doubles as the live announcement. */}
      <span aria-live="polite">{copied ? t.ui.copied : t.ui.copyEmail}</span>
    </button>
  )
}

export default CopyEmail
