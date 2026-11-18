import { languages } from '../data/cv'
import { useLanguage } from '../i18n/context'

function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label={t.ui.languageSwitch}>
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
