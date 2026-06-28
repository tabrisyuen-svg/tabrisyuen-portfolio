import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Companies from './components/Companies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'

export interface ModalInfo {
  url: string
  title: string
}

function App() {
  const [modal, setModal] = useState<ModalInfo | null>(null)

  const openModal = (url: string, title: string) => setModal({ url, title })
  const closeModal = () => setModal(null)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.1 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fff', color: '#0a0a0a' }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects openModal={openModal} />
        <Skills />
        <Companies openModal={openModal} />
        <Contact />
      </main>
      <Footer />
      {modal && <Modal url={modal.url} title={modal.title} onClose={closeModal} />}
    </div>
  )
}

export default App