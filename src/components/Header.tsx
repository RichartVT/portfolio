import LanguageSwitch from './LanguageSwitch'
import { useLanguage } from '../i18n/context'

function Header() {
  const { t } = useLanguage()

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-header__top">
          <a className="site-header__name" href="#hero">
            {t.profile.name}
          </a>
          <LanguageSwitch />
        </div>
        <nav aria-label={t.ui.mainNav}>
          <ul className="site-header__nav">
            {t.navItems.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="site-header__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
