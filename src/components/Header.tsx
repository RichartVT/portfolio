import { navItems, profile } from '../data/cv'

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__name" href="#hero">
          {profile.name}
        </a>
        <nav aria-label="Main">
          <ul className="site-header__nav">
            {navItems.map((item, index) => (
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
