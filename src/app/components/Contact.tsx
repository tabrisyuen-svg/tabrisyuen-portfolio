function Contact() {
  const items = [
    {
      label: 'Email',
      value: 'tabrisyuen@gmail.com',
      href: 'mailto:tabrisyuen@gmail.com',
      icon: '✉️',
      alwaysLink: true,
    },
    {
      label: 'Phone',
      value: '+(852) 60969327',
      href: 'tel:+85260969327',
      icon: '📞',
      alwaysLink: false, // 只有手機版可點
    },
    {
      label: 'WhatsApp',
      value: '+(852) 60969327',
      href: 'https://wa.me/85260969327',
      icon: '💬',
      alwaysLink: true,
    },
    {
      label: 'Location',
      value: 'Hong Kong',
      href: null,
      icon: '📍',
      alwaysLink: false,
    },
  ]

  return (
    <section id="contact" style={{ padding: '5rem 1rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        {/* Title */}
        <div className="reveal" style={{ overflow: 'hidden', borderBottom: '3px solid #1e40af', paddingBottom: '.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: 'clamp(35px,5vw,58.5px)', fontWeight: 700, lineHeight: 1, WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #1e40af', color: 'transparent', margin: 0 }}>
            Get In Touch
          </h2>
        </div>

        {/* Card */}
        <div className="reveal" style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)', padding: '2rem', maxWidth: 480 }}>
          <p style={{ fontWeight: 600, fontSize: '1rem', color: '#374151', marginTop: 0, marginBottom: '1.5rem' }}>
            Contact Information
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {items.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Icon */}
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                  {item.icon}
                </div>
                {/* Text */}
                <div>
                  <p style={{ margin: 0, fontSize: '.75rem', color: '#9ca3af' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={item.alwaysLink ? '' : 'mobile-link'}
                      style={{ fontSize: '.95rem', color: '#111827', textDecoration: 'none', fontWeight: 500 }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ margin: 0, fontSize: '.95rem', color: '#111827', fontWeight: 500 }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
