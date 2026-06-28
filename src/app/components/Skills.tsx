const skillGroups = [
  {
    title: 'Digital Marketing',
    skills: [
      { name: 'Google Ads', level: 95 },
      { name: 'Meta Ads', level: 90 },
      { name: 'SEM / SEO', level: 85 },
      { name: 'KPI Tracking', level: 90 },
      { name: 'Conversion Rate Optimization', level: 80 },
      { name: 'A/B Testing', level: 75 },
    ]
  },
  {
    title: 'Creative & Content',
    skills: [
      { name: 'Adobe Illustrator', level: 80 },
      { name: 'Adobe Premiere Pro', level: 75 },
      { name: 'Content Strategy', level: 90 },
      { name: 'UX/UI Collaboration', level: 70 },
      { name: 'CMS Management (Shopify)', level: 85 },
    ]
  },
  {
    title: 'Tools & Analytics',
    skills: [
      { name: 'Google Analytics', level: 95 },
      { name: 'Google Ads Manager', level: 95 },
      { name: 'Meta Ads Manager', level: 90 },
      { name: 'Ahrefs', level: 80 },
      { name: 'SEMrush', level: 80 },
    ]
  },
  {
    title: 'Front-end Development',
    skills: [
      { name: 'HTML / CSS', level: 75 },
      { name: 'React', level: 60 },
      { name: 'TypeScript', level: 55 },
      { name: 'Vite', level: 55 },
    ]
  },
]

const certs = [
  { name: 'Google Analytics', img: 'https://lh3.googleusercontent.com/pw/AP1GczPG100g-2QMpyor8P-LD-dnXuc0i30hjrypkMIHXQm_UVJ4rx7ZpJPAiHlhQIKxVzkDI_JyvjxanMjzXgQlTEiEh98lGbuA7IGZ17cLTrPXnWOu34l25OhxvPIjtUdmfPuaSRJ0AXIuViJ8zpcI0rm3Yw=w1189-h919-s-no-gm?authuser=0' },
  { name: 'AI-Powered Performance Ads', img: 'https://lh3.googleusercontent.com/pw/AP1GczNVnjsJq6z65STDMX68OG6PsCDkkeXDcQrcNtYKOKFZId8HekTcWdrp1sOqdmtraiabGS9h-rSqxYg3cDZq54bhEZYR_nK2o5Ji1Z3lImOBdOMKFbvBUstApdH7h3qhKOQ3dZikC1GslcHoTvuQ5fIadA=w1189-h919-s-no-gm?authuser=0' },
  { name: 'Google Ads Apps', img: 'https://lh3.googleusercontent.com/pw/AP1GczM4Py6B6Q0GeJw_wD1AwqqUUBQI6yNDTHiqb4J0ysXqIIIQtCqjYCm2-IbrM720fdX0XDwcwgOewfqmi4vLJv2qN_bxAaySBaxDJQ-baz7cKMQUaXu5_DkNhViSGnDBv74gpTt0dZ0N85HKvc88U_JJdg=w1189-h919-s-no-gm?authuser=0' },
  { name: 'Google Ads Creative', img: 'https://lh3.googleusercontent.com/pw/AP1GczOHn5rHoXP2bz_T3IutVKDX6FyHuVJiZQmVJD8Js1X_vH2qe8x3Q9D9P6pUQQcxsHFV7VcJwiOt5nrHX2JtpxNu18RMZHqZ4ve78WfoS_2TYtCtwZCY5606iuWcdbTTehI_KyAVIgdB85P6QeRoMXBzAw=w1189-h919-s-no-gm?authuser=0' },
  { name: 'Google Ads Measurement', img: 'https://lh3.googleusercontent.com/pw/AP1GczM-CS7GJkovENi6_GX_sPNB7EoGeUwQ1yn-tNssPgmrhblg50y6oW8UeRWccxZZHA6q91B0dJABK7aFWSwckttoi4GpL0NORxZgEBjT9FZ5LdRNxXma7i7jvFPn4Cz2pPA0k4JRif0UK4gVj9Dmt78UIg=w1189-h919-s-no-gm?authuser=0' },
  { name: 'Google Ads Search', img: 'https://lh3.googleusercontent.com/pw/AP1GczN51Ml23Oj2jXrgpuzrWdO6cn-FfwAtoJs5VejkVdONfo5-1AdhoMf3FQkbRgByvvoVNmRLWQM1A-6p-o38RhVkSoUvWgTZYOGdBnuagevWNyNpnFKrfpjUCxikH8uoB5JNL8PtNUMwnVDMwAclQqpaIg=w1189-h919-s-no-gm?authuser=0' },
  { name: 'Grow Offline Sales', img: 'https://lh3.googleusercontent.com/pw/AP1GczMe1nNlB8VGP4cVjCwJRgUnbKtUgokHpcX8YuYXUPKog2gDyC9rmULxx0LY76AyT0hdg3MxzziEFYNGxC5l0dd0_iIVS75vtAhij8k0jN5R0mat8NC33xalRixYh4uVssb20PwpQOMJwUcaro6VSVtbiQ=w1189-h919-s-no-gm?authuser=0' },
  { name: 'Google Ads Display', img: 'https://lh3.googleusercontent.com/pw/AP1GczMpvpdfxly-JgxAOKwMEVd02nain1Bb6UnCDLP5ynEmrRsmeW6GcRy0s4PFzghvlPPbfAOaGH5UW3vObYo4wnbUEJQHyxfw6BAYKkKSgI8P1r3Ptuwm9634oT7BFTWP8AMaf9drUpD2Cr3MVDFtCH6xKg=w1189-h919-s-no-gm?authuser=0' },
]

function Skills() {
  return (
    <section id="skills" style={{ padding: '5rem 1rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <div style={{ overflow: 'hidden', borderBottom: '3px solid #1e40af', paddingBottom: '.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(35px,5vw,58.5px)', fontWeight: 700, lineHeight: 1, WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #1e40af', color: 'transparent', margin: 0 }}>
            Skills
          </h2>
        </div>

        {/* Skill Groups */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', marginBottom: '4rem' }}>
          {skillGroups.map((group, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, textAlign: 'center', marginBottom: '1.5rem', marginTop: 0 }}>
                {group.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {group.skills.map((skill, j) => (
                  <div key={j}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem' }}>
                      <span style={{ fontSize: '.85rem', color: '#374151' }}>{skill.name}</span>
                      <span style={{ fontSize: '.8rem', color: '#6b7280' }}>{skill.level}%</span>
                    </div>
                    <div style={{ background: '#e5e7eb', borderRadius: '9999px', height: '6px' }}>
                      <div style={{
                        background: '#1d4ed8', borderRadius: '9999px',
                        height: '6px', width: `${skill.level}%`,
                        transition: 'width .6s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#1f2937' }}>
          Google Certifications
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
          {certs.map((c, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)', padding: '1rem' }}>
              <img src={c.img} alt={c.name} style={{ width: '100%', height: 'auto', borderRadius: '.5rem' }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills