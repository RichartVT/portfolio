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
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
