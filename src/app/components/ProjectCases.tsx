interface Props {
  openModal: (url: string, title: string) => void
}

const cases = [
  {
    title: 'Marketing & Performance Strategist',
    meta: 'Jan 2024 - Mar 2024 ¡P Hong Kong',
    description: 'Drove integrated growth initiatives by aligning paid social and search, SEO/SEM, analytics-led content, and full-cycle event activations to improve audience engagement and conversion performance.',
    tags: ['Social Media', 'SEO', 'Email Marketing', 'Analytics', 'Digital Ads'],
    results: [
      'Increased conversions through coordinated Meta and Google Ads strategies.',
      'Grew qualified traffic using SEO/SEM informed by analytics insights.',
      'Improved ROI by optimizing creatives, landing pages, and conversion funnels.',
    ],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMctz4REib6kqi_vXdMFYOVfoOvKW-QbPk_5tUVQkchDXi1sOlS3e5i0Go0iPnY0Kr398YqVzvBotRqQ0r-M1-mQndorn_-ns8KipoLyo9GwF6lO3TVkt1eoiZOnH6yJYdLbjLDFhlBVIMwOLmL6XutWg=w1377-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenmarketing.figma.site/',
  },
  {
    title: 'Branding and Communications',
    meta: 'Sep 2023 - Dec 2023 ¡P Remote',
    description: 'Developed and executed a full brand launch strategy encompassing market research, positioning, content creation, and multi-channel campaign execution to strengthen brand recognition.',
    tags: ['Brand Strategy', 'Content Marketing', 'Campaign Management'],
    results: [
      'Increased aided brand recall by 20% within three months.',
      'Lifted lesson bookings by 25% and demo-to-purchase conversion by 18%.',
      'Grew own-brand revenue mix by 15% through improved brand clarity.',
    ],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczM9vf1t20S38XHye-JiFqlBeFoX4v6qt4wubdX0XcW0P0x_HCplB2_dCl9vY5jqIBYFH4Pda5SCouOv8CNnm9jOed6iLEGrHzu7CkOxFt-HzuhfwN7OoDOTOFeU4pV4AAzG9g9pP0cM7fnySHiQda9eaQ=w919-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenbnc.figma.site/',
  },
  {
    title: 'Event Marketing & Execution',
    meta: 'Jun 2023 - Aug 2023 ¡P Hong Kong',
    description: 'Led end-to-end event marketing initiatives across diverse formats including app launches, trade exhibitions, industry seminars, and retail promotions covering planning, promotion and on-site execution.',
    tags: ['Event Marketing', 'Digital Promotion', 'Partnership', 'Audience Engagement'],
    results: [
      'Successfully delivered 15+ events with consistent execution and coordination.',
      'Integrated digital and offline channels to extend reach and reinforce messaging.',
      'Increased attendee engagement by up to 40% through targeted promotion strategies.',
    ],
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNAQkuPXoeYtXaDTcQ5DIgq9ympre4gCy1TxVX3yb2w-D8zGyRO0jaFU4cdmU-JHJ6aQ6plx_tMSea-Bf65BTeWPO3SxhAhyU-kG5Xl-RsuspCIKr_DmzyWhtkXRSr9Dd_MQMzJmBH_nEDGVCBR_jTzXg=w919-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenevents.figma.site/',
  },
]

function ProjectCases({ openModal }: Props) {
  return (
    <section id="project-cases" style={{ padding: '5rem 1rem', background: '#fff' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <div style={{ overflow: 'hidden', borderBottom: '3px solid #1e40af', paddingBottom: '.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(35px,5vw,58.5px)', fontWeight: 700, lineHeight: 1, WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #1e40af', color: 'transparent', margin: 0 }}>
            Case Study
          </h2>
        </div>

        <p style={{ color: '#4b5563', maxWidth: '40rem', marginBottom: '2rem' }}>
          A showcase of my project-based and contract work across diverse industries.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {cases.map((c, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }}>

                {/* Image */}
                <div style={{ position: 'relative', minHeight: '16rem', overflow: 'hidden' }}>
                  <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '.75rem' }}>
                    {c.tags.map((tag, j) => (
                      <span key={j} style={{ background: '#f1f5f9', color: '#475569', fontSize: '.75rem', padding: '.2rem .6rem', borderRadius: '9999px', fontWeight: 500 }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '.25rem', marginTop: 0 }}>{c.title}</h3>
                  <p style={{ fontSize: '.8rem', color: '#9ca3af', marginBottom: '1rem' }}>{c.meta}</p>
                  <p style={{ fontSize: '.9rem', color: '#4b5563', marginBottom: '1rem' }}>{c.description}</p>
                  <p style={{ fontWeight: 600, fontSize: '.85rem', color: '#374151', marginBottom: '.5rem' }}>Key Results:</p>
                  <ul style={{ listStyle: 'none', margin: '0 0 1rem', padding: 0 }}>
                    {c.results.map((r, j) => (
                      <li key={j} style={{ fontSize: '.8rem', color: '#4b5563', display: 'flex', alignItems: 'flex-start', marginBottom: '.3rem' }}>
                        <span style={{ color: '#1d4ed8', marginRight: '.5rem', fontSize: '1rem', lineHeight: 1.3, flexShrink: 0 }}>¡E</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openModal(c.url, c.title)}
                    style={{ background: 'transparent', color: '#030213', border: '1.5px solid rgba(0,0,0,.2)', borderRadius: '.5rem', padding: '.35rem .85rem', cursor: 'pointer', fontSize: '.8rem', fontWeight: 500 }}>
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectCases