import { useState } from 'react'

interface Props {
  openModal: (url: string, title: string) => void
}

const projects = [
  {
    title: 'Marketing & Performance Strategist',
    description: 'Plan and execute multi-channel campaigns across paid, organic, and owned channels. Manage Meta and Google Ads, apply SEO/SEM, and continuously optimize creatives and conversion funnels.',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMctz4REib6kqi_vXdMFYOVfoOvKW-QbPk_5tUVQkchDXi1sOlS3e5i0Go0iPnY0Kr398YqVzvBotRqQ0r-M1-mQndorn_-ns8KipoLyo9GwF6lO3TVkt1eoiZOnH6yJYdLbjLDFhlBVIMwOLmL6XutWg=w1377-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenmarketing.figma.site/',
    tags: ['Digital Marketing', 'Meta Ads', 'Google Ads', 'SEO & SEM', 'Analytics'],
    meta: 'Jan 2024 - Mar 2024 ¡P Hong Kong',
    results: [
      'Increased conversions through coordinated Meta and Google Ads strategies.',
      'Grew qualified traffic using SEO/SEM informed by analytics insights.',
      'Improved ROI by optimizing creatives, landing pages, and conversion funnels.',
    ],
  },
  {
    title: 'Branding and Communications',
    description: 'Shape clear and consistent brand narratives across touchpoints. Develop messaging, copy, and visual assets while aligning internal and external stakeholders.',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMEsUDtKKppHe5usKXbgqYYbudirIRixtICyL3lnX9Jlrl3MNcxY67A5jmaL95b8onPv5YNBAzCS1BgPU5vpMHtJkei7RgSvLbrnhoySvc38IOL2Gich_yTGDJ25_TaDUNvcoxVF3TKssHx3afYw6sUsw=w689-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenbnc.figma.site/',
    tags: ['Brand Strategy', 'Visual Identity', 'Copywriting', 'Storytelling'],
    meta: 'Sep 2023 - Dec 2023 ¡P Remote',
    results: [
      'Increased aided brand recall by 20% within three months.',
      'Lifted lesson bookings by 25% and demo-to-purchase conversion by 18%.',
      'Grew own-brand revenue mix by 15% through improved brand clarity.',
    ],
  },
  {
    title: 'Event Executive',
    description: 'Deliver end-to-end execution for seminars, activations, and corporate events from strategy and budgeting to vendor coordination and post-event analysis.',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMjXRS3mczHM5Ru3cFZSqQcsXGVUW27XCzJVq-0Mrz5FzdtwTQ6ZwZ6t8-sYrbURQPNW2pwZHID5w-PdJo9Ncz7xVS1xLCFGFBi7qL1YZfED2QA-9gi-NnlzecYdUzYWCBK2RDO-Oyc_S451cnmmvztDA=w919-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenevents.figma.site/',
    tags: ['Event Planning', 'On-site Ops', 'Vendor Mgmt', 'Engagement'],
    meta: 'Jun 2023 - Aug 2023 ¡P Hong Kong',
    results: [
      'Successfully delivered 15+ events with consistent execution and coordination.',
      'Integrated digital and offline channels to extend reach and reinforce messaging.',
      'Increased attendee engagement by up to 40% through targeted promotion strategies.',
    ],
  },
]

function Projects({ openModal }: Props) {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <section id="projects" style={{ padding: '5rem 1rem', background: '#fff' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        {/* Title */}
        <div className="reveal" style={{ overflow: 'hidden', borderBottom: '3px solid #1e40af', paddingBottom: '.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(35px,5vw,58.5px)', fontWeight: 700, lineHeight: 1, WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #1e40af', color: 'transparent', margin: 0 }}>
            Featured Projects
          </h2>
        </div>

        {/* View Toggle */}
        <div className="reveal" style={{ display: 'flex', gap: '.75rem', marginBottom: '2rem' }}>
          <button
            onClick={() => setView('grid')}
            style={{
              padding: '.5rem 1.25rem', borderRadius: '9999px',
              border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '.85rem',
              background: view === 'grid' ? '#1d4ed8' : '#e5e7eb',
              color: view === 'grid' ? '#fff' : '#4b5563',
              transition: 'all .2s'
            }}>
            Grid View
          </button>
          <button
            onClick={() => setView('list')}
            style={{
              padding: '.5rem 1.25rem', borderRadius: '9999px',
              border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '.85rem',
              background: view === 'list' ? '#1d4ed8' : '#e5e7eb',
              color: view === 'list' ? '#fff' : '#4b5563',
              transition: 'all .2s'
            }}>
            Case Study
          </button>
        </div>

        {/* Grid View */}
        {view === 'grid' && (
          <div className="grid-3 reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
            {projects.map((p, i) => (
              <div key={i} className="card proj-card" style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)', overflow: 'hidden', transition: 'box-shadow .2s' }}>
                <div style={{ position: 'relative', height: '12rem', overflow: 'hidden', borderRadius: '.75rem .75rem 0 0' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .3s' }} />
                  <div className="proj-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,.6),transparent)', opacity: 0, transition: 'opacity .3s', display: 'flex', alignItems: 'flex-end', padding: '1rem' }}>
                    <button
                      onClick={() => openModal(p.url, p.title)}
                      style={{ background: 'rgba(255,255,255,.9)', color: '#030213', border: 'none', borderRadius: '.5rem', padding: '.35rem .85rem', cursor: 'pointer', fontSize: '.8rem', fontWeight: 500 }}>
                      Detail
                    </button>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '.5rem', marginTop: 0 }}>{p.title}</h3>
                  <p style={{ fontSize: '.8rem', color: '#6b7280', marginBottom: '1rem' }}>{p.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                    {p.tags.map((tag, j) => (
                      <span key={j} style={{ background: '#f1f5f9', color: '#475569', fontSize: '.75rem', padding: '.2rem .6rem', borderRadius: '9999px', fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List / Case Study View */}
        {view === 'list' && (
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {projects.map((p, i) => (
              <div key={i} className="card" style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)', overflow: 'hidden' }}>
                <div className="case-inner" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>

                  {/* Image */}
                  <div className="case-image" style={{ position: 'relative', minHeight: '16rem', overflow: 'hidden' }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                  </div>

                  {/* Body */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '.75rem' }}>
                      {p.tags.map((tag, j) => (
                        <span key={j} style={{ background: '#f1f5f9', color: '#475569', fontSize: '.75rem', padding: '.2rem .6rem', borderRadius: '9999px', fontWeight: 500 }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '.25rem', marginTop: 0 }}>{p.title}</h3>
                    <p style={{ fontSize: '.8rem', color: '#9ca3af', marginBottom: '1rem' }}>{p.meta}</p>
                    <p style={{ fontSize: '.9rem', color: '#4b5563', marginBottom: '1rem' }}>{p.description}</p>
                    <p style={{ fontWeight: 600, fontSize: '.85rem', color: '#374151', marginBottom: '.5rem' }}>Key Results:</p>
                    <ul style={{ listStyle: 'none', margin: '0 0 1rem', padding: 0 }}>
                      {p.results.map((r, j) => (
                        <li key={j} style={{ fontSize: '.8rem', color: '#4b5563', display: 'flex', alignItems: 'flex-start', marginBottom: '.3rem' }}>
                          <span style={{ color: '#1d4ed8', marginRight: '.5rem', fontSize: '1rem', lineHeight: 1.3, flexShrink: 0 }}>¡E</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => openModal(p.url, p.title)}
                      style={{ background: 'transparent', color: '#030213', border: '1.5px solid rgba(0,0,0,.2)', borderRadius: '.5rem', padding: '.35rem .85rem', cursor: 'pointer', fontSize: '.8rem', fontWeight: 500 }}>
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects