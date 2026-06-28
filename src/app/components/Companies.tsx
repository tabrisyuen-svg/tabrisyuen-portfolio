import { useState } from 'react'

interface Props {
  openModal: (url: string, title: string) => void
}

const fulltime = [
  {
    name: 'Yahoo',
    image: 'https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo-2009-2013.png',
    url: 'https://tabrisyuenyahoo.figma.site/',
    blend: false
  },
  {
    name: 'Networld Technology Limited',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMom886rM5LqNfnbDEMyjP-FdaZ5jIiMNc66oR1qUWmfDHNz3OKBrVgSSm6SMvfy_uUIqWktKxS2MJ5SfAh-t0LQFWskHEkSvqJz71ylL5DMx04UabGucdNwHCfQwBRDrjiJ2pkSR4Yah0RymaZMoBNBw=w258-h100-s-no-gm?authuser=0',
    url: 'https://tabrisyuennetworld.figma.site/',
    blend: false
  },
  {
    name: 'Chuston Lead International Limited',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczPxPTEP0B41gkq9U_MFamfSNMg_MFWWa0S9hfD1YHaw4fBA_s55Vt1ELfGNVG_2RzqBVmjYYaBlmaalVDxd6fSEAf4oQLjzuy_nWTjmKXbJNFezHwqY6pPVqg2ZwprQvLN2XwgA1kZFRPP5nbZ5kM53Dg=w370-h130-s-no-gm?authuser=0',
    url: 'https://tabrisyuenpetchill.figma.site/',
    blend: false
  },
  {
    name: 'People Technology Holdings Limited',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNB0-ELqlbAK3Zu8nFK7b7rZS400KwjfqdJHLd-bpxDD909iplZpLtW5JQQu0Hut5-R-qBVDH1wadafIz9iJI5Qs_5CLJpCRpfX5Xfc8gNKBjYvb8DsmGVkn0KbknFAcdcV9QB4VwGVvuv-0A3AQ5iZng=w370-h130-s-no-gm?authuser=0',
    url: 'https://tabrisyuenpeopletech.figma.site/',
    blend: true
  },
]

const contract = [
  {
    name: 'Mass Modules Limited',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczMfjcrW00iu49CD-7vv6_9ehykO7QJskeTyMJHf7WaSMaYWBoGD7sG9FFkQewXkS8iLHuhbngz_RpQVmPuDiaIO_L42FKvcfN55WhsbugkU0wmRJESlYA2yi16SCcapDCzzCFvKdFDpQ7EToNSx0hOhrw=w1872-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenmassmodules.figma.site/',
    blend: true
  },
  {
    name: 'PapaHome',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczM6ojcoBmdf4WVHfTL8-Uw4vBN0ok7caaxLTfE2uvsIySRweBVBjyXN0xzFHxFStpcsOVqI9HPJ24fOJne0KP56i7_GIC1yT5oMlEgNsqBQYzdESvh3jqHYGRtOA3xrddDaPuSkfsW-8EQjK6w6PCw4Xg=w1634-h919-s-no-gm?authuser=0',
    url: 'https://tabrisyuenpapahome.figma.site/',
    blend: true
  },
  {
    name: 'Solos Smart Glasses',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOPFkBISPKlUaHaZbO3HQ0FdjUPPejwuZLcFgWpeVnCpHZyQCkYhbMh5ZM_lvKWh-01xaIhIDrF2j-o-G2cIDgAnU1JgBJwy3g1kQ6V7s_aZp0joBq8xF9D37jr4tsRLhL3SeNctGq4wwYD6BzfGDPi8w=w1493-h774-s-no-gm?authuser=0',
    url: 'https://tabrisyuensolos.figma.site/',
    blend: true
  },
]

function Companies({ openModal }: Props) {
  const [tab, setTab] = useState<'fulltime' | 'contract'>('fulltime')
  const list = tab === 'fulltime' ? fulltime : contract

  return (
    <section id="companies" style={{ padding: '5rem 1rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        {/* Title */}
        <div style={{ overflow: 'hidden', borderBottom: '3px solid #1e40af', paddingBottom: '.5rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 'clamp(35px,5vw,58.5px)', fontWeight: 700, lineHeight: 1, WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #1e40af', color: 'transparent', margin: 0 }}>
            Companies
          </h2>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '.75rem', marginBottom: '2rem' }}>
          <button
            onClick={() => setTab('fulltime')}
            style={{
              padding: '.5rem 1.5rem', borderRadius: '9999px',
              border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '.9rem',
              background: tab === 'fulltime' ? '#1d4ed8' : '#e5e7eb',
              color: tab === 'fulltime' ? '#fff' : '#4b5563',
              transition: 'all .2s'
            }}>
            Full-time
          </button>
          <button
            onClick={() => setTab('contract')}
            style={{
              padding: '.5rem 1.5rem', borderRadius: '9999px',
              border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '.9rem',
              background: tab === 'contract' ? '#1d4ed8' : '#e5e7eb',
              color: tab === 'contract' ? '#fff' : '#4b5563',
              transition: 'all .2s'
            }}>
            Contract
          </button>
        </div>

        {/* Logo Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
          {list.map((c, i) => (
            <div
              key={i}
              onClick={() => openModal(c.url, c.name)}
              style={{
                background: '#fff', border: '1px solid rgba(0,0,0,.08)',
                borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.06)',
                padding: '1rem', display: 'flex', alignItems: 'center',
                justifyContent: 'center', height: '10rem', cursor: 'pointer'
              }}>
              <img
                src={c.image}
                alt={c.name}
                style={{
                  width: '100%', height: '100%', objectFit: 'contain',
                  filter: 'grayscale(100%)', opacity: .6,
                  mixBlendMode: c.blend ? 'multiply' : 'normal',
                  transition: 'filter .3s, opacity .3s'
                }}
                onMouseEnter={e => {
                  (e.target as HTMLImageElement).style.filter = 'grayscale(0%)'
                  ;(e.target as HTMLImageElement).style.opacity = '1'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLImageElement).style.filter = 'grayscale(100%)'
                  ;(e.target as HTMLImageElement).style.opacity = '.6'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Companies