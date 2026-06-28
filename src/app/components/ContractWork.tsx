interface Props {
  openModal: (url: string, title: string) => void
}

const works = [
  {
    name: 'Mass Modules Limited',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMfjcrW00iu49CD-7vv6_9ehykO7QJskeTyMJHf7WaSMaYWBoGD7sG9FFkQewXkS8iLHuhbngz_RpQVmPuDiaIO_L42FKvcfN55WhsbugkU0wmRJESlYA2yi16SCcapDCzzCFvKdFDpQ7EToNSx0hOhrw=w1872-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenmassmodules.figma.site/',
  },
  {
    name: 'PapaHome',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczM6ojcoBmdf4WVHfTL8-Uw4vBN0ok7caaxLTfE2uvsIySRweBVBjyXN0xzFHxFStpcsOVqI9HPJ24fOJne0KP56i7_GIC1yT5oMlEgNsqBQYzdESvh3jqHYGRtOA3xrddDaPuSkfsW-8EQjK6w6PCw4Xg=w1634-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenpapahome.figma.site/',
  },
  {
    name: 'Solos Smart Glasses',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOPFkBISPKlUaHaZbO3HQ0FdjUPPejwuZLcFgWpeVnCpHZyQCkYhbMh5ZM_lvKWh-01xaIhIDrF2j-o-G2cIDgAnU1JgBJwy3g1kQ6V7s_aZp0joBq8xF9D37jr4tsRLhL3SeNctGq4wwYD6BzfGDPi8w=w1493-h774-s-no-gm?authuser=0',
    url: 'https://tabrisyuensolos.figma.site/',
  },
]

function ContractWork({ openModal }: Props) {
  return (
    <section id="contract-work" style={{ padding: '5rem 1rem', background: '#fff' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <div style={{ overflow: 'hidden', borderBottom: '3px solid #1e40af', paddingBottom: '.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(35px,5vw,58.5px)', fontWeight: 700, lineHeight: 1, WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #1e40af', color: 'transparent', margin: 0 }}>
            Contract
          </h2>
        </div>

        <p style={{ color: '#4b5563', maxWidth: '40rem', marginBottom: '2rem' }}>
          Organizations I've partnered with to deliver targeted marketing solutions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
          {works.map((w, i) => (
            <div
              key={i}
              onClick={() => openModal(w.url, w.name)}
              style={{
                background: '#fff', border: '1px solid rgba(0,0,0,.08)',
                borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)',
                padding: '1rem', display: 'flex', alignItems: 'center',
                justifyContent: 'center', height: '10rem', cursor: 'pointer'
              }}>
              <img
                src={w.image}
                alt={w.name}
                style={{
                  width: '100%', height: '100%', objectFit: 'contain',
                  filter: 'grayscale(100%)', opacity: .6,
                  mixBlendMode: 'multiply',
                  transition: 'filter .3s, opacity .3s'
                }}
                onMouseEnter={e => { (e.target as HTMLImageElement).style.filter = 'grayscale(0%)'; (e.target as HTMLImageElement).style.opacity = '1' }}
                onMouseLeave={e => { (e.target as HTMLImageElement).style.filter = 'grayscale(100%)'; (e.target as HTMLImageElement).style.opacity = '.6' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContractWork