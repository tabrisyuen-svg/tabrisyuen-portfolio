interface ModalProps {
  url: string
  title: string
  onClose: () => void
}

function Modal({ url, title, onClose }: ModalProps) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(0,0,0,.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem'
      }}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '1100px', height: '90vh',
          background: '#fff', borderRadius: '1rem',
          overflow: 'hidden', position: 'relative',
          display: 'flex', flexDirection: 'column'
        }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#0a0a0a' }}>
            {title}
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '1.5rem', color: '#6b7280', lineHeight: 1,
              padding: '.25rem .5rem', borderRadius: '.5rem'
            }}>
            ?
          </button>
        </div>

        {/* iframe */}
        <iframe
          src={url}
          title={title}
          style={{ flex: 1, width: '100%', border: 'none' }}
          allow="fullscreen"
        />
      </div>
    </div>
  )
}

export default Modal