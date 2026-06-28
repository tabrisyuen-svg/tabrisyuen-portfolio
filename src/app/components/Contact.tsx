import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const inputStyle = {
    width: '100%', padding: '.75rem 1rem',
    border: '1px solid #e5e7eb', borderRadius: '.5rem',
    fontSize: '.9rem', outline: 'none',
    fontFamily: 'Inter, sans-serif',
    boxSizing: 'border-box' as const
  }

  return (
    <section id="contact" style={{ padding: '5rem 1rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <div style={{ overflow: 'hidden', borderBottom: '3px solid #1e40af', paddingBottom: '.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(35px,5vw,58.5px)', fontWeight: 700, lineHeight: 1, WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #1e40af', color: 'transparent', margin: 0 }}>
            Get In Touch
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

          {/* Contact Info */}
          <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', marginTop: 0 }}>
              Contact Information
            </h3>

            {[
              {
                label: 'Email',
                value: 'tabrisyuen@gmail.com',
                href: 'mailto:tabrisyuen@gmail.com',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              },
              {
                label: 'Phone',
                value: '+(852) 60969327',
                href: 'tel:+85260969327',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.38 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              },
              {
                label: 'Location',
                value: 'Hong Kong',
                href: null,
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '.8rem', color: '#9ca3af', marginBottom: '.25rem', marginTop: 0 }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: '.95rem', color: '#0a0a0a', textDecoration: 'none' }}>{item.value}</a>
                    : <span style={{ fontSize: '.95rem' }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', marginTop: 0 }}>
              Send a Message
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '.85rem', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '.4rem' }}>Name</label>
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="Your name"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '.85rem', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '.4rem' }}>Email</label>
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="your@email.com"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '.85rem', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '.4rem' }}>Message</label>
                <textarea
                  name="message" value={form.message}
                  onChange={handleChange} placeholder="Your message..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>
              <a
                href={`mailto:tabrisyuen@gmail.com?subject=Message from ${form.name}&body=${form.message}`}
                style={{
                  background: '#030213', color: '#fff',
                  padding: '.75rem 1.5rem', borderRadius: '.5rem',
                  fontWeight: 500, fontSize: '.9rem',
                  textDecoration: 'none', textAlign: 'center',
                  display: 'block'
                }}>
                Send Message
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact