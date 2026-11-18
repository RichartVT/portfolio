import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Lang } from '../data/cv'
import { LanguageContext, STORAGE_KEY, detectLanguage } from './context'

function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLanguage)
  const t = content[lang]

  // Keep the document in step with the UI: screen readers use <html lang>,
  // and the tab title should match the language on screen.
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
  }, [lang, t])

  const value = useMemo(
    () => ({
      lang,
      t,
      setLang: (next: Lang) => {
        setLangState(next)
        try {
          localStorage.setItem(STORAGE_KEY, next)
        } catch {
          // Not persisted; the choice still applies for this visit.
        }
      },
    }),
    [lang, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export default LanguageProvider
