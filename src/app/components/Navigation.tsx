import { useState, useEffect } from 'react'

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Companies', href: '#companies' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? '#fff' : 'transparent',
      boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,.08)' : 'none',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      transition: 'all .3s'
    }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#home" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
          Tabris Yuen
        </a>

        {/* Desktop Links */}
        {!isMobile && (
          <ul style={{ display: 'flex', flexDirection: 'row', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map((l, i) => (
              <li key={i}>
                <a href={l.href}
                  style={{ color: '#4b5563', fontSize: '.9rem', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#4b5563')}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <span style={{ display: 'block', width: 22, height: 2, background: '#4b5563', margin: '5px 0', transition: 'all .3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#4b5563', margin: '5px 0', transition: 'all .3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#4b5563', margin: '5px 0', transition: 'all .3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '1rem' }}>
          {links.map((l, i) => (
            <a key={i} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '.6rem 1rem', color: '#4b5563', textDecoration: 'none', fontSize: '.95rem', borderRadius: '.5rem' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation