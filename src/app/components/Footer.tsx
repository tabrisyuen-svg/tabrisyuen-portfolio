function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#fff', padding: '3rem 1rem 1.5rem' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', marginBottom: '2rem' }}>

          {/* Brand */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '.5rem', marginTop: 0 }}>Tabris Yuen</h3>
            <p style={{ fontSize: '.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Marketing & Digital Experience Specialist
            </p>
            <div style={{ display: 'flex', gap: '.75rem' }}>
              {[
                { href: 'http://www.linkedin.com/in/tabrisyuen', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                { href: 'https://wa.me/85260969327', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
                { href: 'mailto:tabrisyuen@gmail.com', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '.85rem', fontWeight: 600, marginBottom: '1rem', marginTop: 0 }}>Services</h4>
            {[
              { label: 'Digital Marketing', href: 'https://tabrisyuenmarketing.figma.site/' },
              { label: 'Branding', href: 'https://tabrisyuenbnc.figma.site/' },
              { label: 'Event Executive', href: 'https://tabrisyuenevents.figma.site/' },
            ].map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', fontSize: '.85rem', color: '#94a3b8', marginBottom: '.4rem', textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Companies */}
          <div>
            <h4 style={{ fontSize: '.85rem', fontWeight: 600, marginBottom: '1rem', marginTop: 0 }}>Companies / Brands</h4>
            {[
              { label: 'Yahoo', href: 'https://tabrisyuenyahoo.figma.site/' },
              { label: 'Networld', href: 'https://tabrisyuennetworld.figma.site/' },
              { label: 'Mass Modules', href: 'https://tabrisyuenmassmodules.figma.site/' },
              { label: 'Entrebox', href: 'https://tabrisyuenbnc.figma.site/' },
              { label: 'Chuston Lead (PetChill)', href: 'https://tabrisyuenpetchill.figma.site/' },
              { label: 'Solos Technology', href: 'https://tabrisyuensolos.figma.site/' },
              { label: 'People Technology', href: 'https://tabrisyuenpeopletech.figma.site/' },
              { label: 'PapaHome', href: 'https://tabrisyuenpapahome.figma.site/' },
            ].map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', fontSize: '.85rem', color: '#94a3b8', marginBottom: '.4rem', textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '.85rem', fontWeight: 600, marginBottom: '1rem', marginTop: 0 }}>Contact</h4>
            <p style={{ fontSize: '.85rem', color: '#94a3b8', marginBottom: '.4rem' }}>tabrisyuen@gmail.com</p>
            <p style={{ fontSize: '.85rem', color: '#94a3b8', marginBottom: '.4rem' }}>+(852) 60969327</p>
            <p style={{ fontSize: '.85rem', color: '#94a3b8' }}>Hong Kong</p>
          </div>

        </div>

        {/* Bar */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.5rem', textAlign: 'center', color: '#64748b', fontSize: '.85rem' }}>
          Made with <span style={{ color: '#ef4444' }}>?</span> by Tabris Yuen c 2025
        </div>

      </div>
    </footer>
  )
}

export default Footer