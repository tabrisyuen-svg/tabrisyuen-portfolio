function About() {
  return (
    <section id="about" style={{ padding: '5rem 1rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <div style={{ overflow: 'hidden', borderBottom: '3px solid #1e40af', paddingBottom: '.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(35px,5vw,58.5px)', fontWeight: 700, lineHeight: 1, WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #1e40af', color: 'transparent', margin: 0 }}>
            About Me
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>

          {/* Photo */}
          <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,.12)', aspectRatio: '1/1' }}>
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczO_m84zI-Om5TotpphOZ5FYTPAH0DhKUo_JfbArgqsulyL0pop1KH62W8rN4JFnNaKvm_nKSoVhgLVYAH6ooxyoykQoLRoksWk4AieFfLsZkgoGaQqJ6s-8qzyNyukd9ffGYnIacCAY6u18ZzyWNF4W2Q=w919-h919-s-no-gm?authuser=0"
              alt="Tabris Yuen"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Text */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
              Transforming Marketing Strategies into Successful Campaigns
            </h3>
            <p style={{ color: '#4b5563', marginBottom: '1rem', fontSize: '.95rem' }}>
              With over ten years of experience in marketing management, I specialize in deploying data-driven and AI-enabled campaigns that strengthen brand engagement and drive sales growth.
            </p>
            <p style={{ color: '#4b5563', fontSize: '.95rem' }}>
              Beyond campaign leadership, I actively explore emerging consumer engagement approaches, contribute to marketing communities, and mentor early-career professionals.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
          {[
            {
              title: 'Strategic Digital Marketing',
              desc: 'Lead integrated digital strategies that increase brand visibility, demand, and sales performance.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              )
            },
            {
              title: 'Data-Driven Decisions',
              desc: 'Apply analytics and performance data to optimize campaigns, channels, and ROI.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              )
            },
            {
              title: 'Event & Campaign Management',
              desc: 'Plan and execute corporate events and integrated campaigns to support lead generation.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              )
            },
            {
              title: 'Cross-Functional Leadership',
              desc: 'Collaborate with internal teams and external partners to deliver aligned marketing initiatives.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )
            },
          ].map((h, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                {h.icon}
              </div>
              <h4 style={{ fontSize: '.9rem', fontWeight: 600, marginBottom: '.5rem', marginTop: 0 }}>{h.title}</h4>
              <p style={{ fontSize: '.8rem', color: '#6b7280', margin: 0 }}>{h.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About