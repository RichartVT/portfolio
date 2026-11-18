import { createContext, useContext } from 'react'
import { content, type Content, type Lang } from '../data/cv'

export type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Content
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: content.en,
})

export const STORAGE_KEY = 'lang'

/** A saved choice wins; otherwise follow the browser, defaulting to English. */
export function detectLanguage(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') return saved
  } catch {
    // Storage blocked (private mode, disabled cookies): fall through.
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function useLanguage() {
  return useContext(LanguageContext)
}
