import { useEffect } from 'react'

function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', position: 'relative',
      padding: '6rem 1rem 4rem'
    }}>
      {/* Avatar */}
      <div className="fade-in d1" style={{
        width: '8rem', height: '8rem', borderRadius: '50%',
        overflow: 'hidden', margin: '0 auto 1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,.15)'
      }}>
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczO_m84zI-Om5TotpphOZ5FYTPAH0DhKUo_JfbArgqsulyL0pop1KH62W8rN4JFnNaKvm_nKSoVhgLVYAH6ooxyoykQoLRoksWk4AieFfLsZkgoGaQqJ6s-8qzyNyukd9ffGYnIacCAY6u18ZzyWNF4W2Q=w919-h919-s-no-gm?authuser=0"
          alt="Tabris Yuen"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Name */}
      <h1 className="fade-in d2" style={{ fontSize: 'clamp(1.8rem,5vw,3rem)', fontWeight: 700, margin: '0 0 1rem' }}>
        Hi, I'm <span style={{ color: '#1d4ed8' }}>Tabris Yuen</span>
      </h1>

      {/* Title */}
      <h2 className="fade-in d3" style={{ fontSize: 'clamp(1rem,3vw,1.4rem)', color: '#6b7280', fontWeight: 500, margin: '0 0 1.5rem' }}>
        Digital Strategy & Analytics Expert
      </h2>

      {/* Description */}
      <p className="fade-in d4" style={{ color: '#9ca3af', maxWidth: '40rem', margin: '0 auto 2rem' }}>
        A marketing professional with over 10 years of experience, specializing in data- and AI-driven marketing efficiency, large-scale budget management, and strong stakeholder collaboration.
      </p>

      {/* Buttons */}
      <div className="fade-in d5 hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <a href="#projects" className="btn-primary" style={{
          background: '#030213', color: '#fff',
          padding: '.5rem 1.25rem', borderRadius: '.5rem',
          fontWeight: 500, fontSize: '.9rem', textDecoration: 'none',
          transition: 'background .2s'
        }}>
          View My Work
        </a>
        <a href="#contact" className="btn-outline" style={{
          background: 'transparent', color: '#030213',
          border: '1.5px solid rgba(0,0,0,.2)',
          padding: '.5rem 1.25rem', borderRadius: '.5rem',
          fontWeight: 500, fontSize: '.9rem', textDecoration: 'none',
          transition: 'all .2s'
        }}>
          Get in Touch
        </a>
      </div>

      {/* Social */}
      <div className="fade-in d5" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
        {[
          { href: 'https://www.linkedin.com/in/tabrisyuen/', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
          { href: 'https://wa.me/85260969327', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
          { href: 'mailto:tabrisyuen@gmail.com', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
            style={{ color: '#6b7280', transition: 'color .2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1d4ed8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}>
            {s.icon}
          </a>
        ))}
      </div>

      {/* Scroll Down */}
      <button
        className="bounce"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
    </section>
  )
}

export default Hero