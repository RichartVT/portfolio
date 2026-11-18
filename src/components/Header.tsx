import { useEffect, useState } from 'react'
import LanguageSwitch from './LanguageSwitch'
import { useLanguage } from '../i18n/context'

function Header() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  // Escape closes the phone menu, as any disclosure should.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="site-header" data-menu-open={menuOpen || undefined}>
      <div className="container site-header__inner">
        <div className="site-header__top">
          <a
            className="site-header__name"
            href="/"
            onClick={(event) => {
              // Same page: scroll to the top and drop any #section from the
              // address bar instead of reloading.
              event.preventDefault()
              setMenuOpen(false)
              window.history.replaceState(null, '', '/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {t.profile.shortName}
            <span className="site-header__name-rest">
              {t.profile.name.slice(t.profile.shortName.length)}
            </span>
          </a>
          <LanguageSwitch />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? t.ui.closeMenu : t.ui.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle__bars" aria-hidden="true" />
          </button>
        </div>
        <nav id="site-nav" className="site-header__navwrap" aria-label={t.ui.mainNav}>
          <ul className="site-header__nav">
            {t.navItems.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
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
