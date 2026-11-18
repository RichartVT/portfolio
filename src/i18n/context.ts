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

/** English by default; a visitor's own choice is remembered. */
export function detectLanguage(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') return saved
  } catch {
    // Storage blocked (private mode, disabled cookies): fall through.
  }
  return 'en'
}

export function useLanguage() {
  return useContext(LanguageContext)
}
