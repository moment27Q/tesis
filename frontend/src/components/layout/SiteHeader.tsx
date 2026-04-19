export type AppPage = 'home' | 'blog'

type SiteHeaderProps = {
  activePage: AppPage
  onGoHome: () => void
  onGoBlog: () => void
  onPidePrestamo: () => void
}

export function SiteHeader({ activePage, onGoHome, onGoBlog, onPidePrestamo }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <button type="button" className="brand brand--button" onClick={onGoHome}>
        Jemacash
      </button>

      <nav className="menu" aria-label="Navegación principal">
        <button type="button" className="menu-link menu-link--ghost" onClick={onGoHome}>
          Préstamos
        </button>
        <button type="button" className="menu-link menu-link--ghost" onClick={onGoHome}>
          Valuar Equipo
        </button>
        <button type="button" className="menu-link menu-link--ghost" onClick={onGoHome}>
          Nosotros
        </button>
        <button
          type="button"
          className={`menu-link${activePage === 'blog' ? ' menu-link--active' : ' menu-link--ghost'}`}
          onClick={onGoBlog}
        >
          Blog
        </button>
      </nav>

      <button className="pill-btn" type="button" onClick={onPidePrestamo}>
        Pide tu préstamo
      </button>
    </header>
  )
}
