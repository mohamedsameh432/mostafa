import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value.slice(0, 30))
  }

  const count = text.length
  let message
  if (count < 10) {
    message = 'Too short'
  } else if (count <= 20) {
    message = 'Good'
  } else {
    message = 'Too long'
  }

  useEffect(() => {
    document.title = `${count} chars - ${message}`
  }, [count, message])

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Live Character Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={30}
        placeholder="Type here (max 30 chars)"
        style={{
          width: '100%',
          height: '150px',
          padding: '1rem',
          fontSize: '1.2rem',
          border: '2px solid #ccc',
          borderRadius: '8px',
          resize: 'vertical',
          marginBottom: '1.5rem',
          fontFamily: 'monospace'
        }}
      />
      <div style={{
        fontSize: '2rem',
        fontFamily: 'monospace',
        padding: '1rem',
        background: '#f0f0f0',
        borderRadius: '8px',
        marginBottom: '1rem'
      }}>
        {count}/30 characters
      </div>
      <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        padding: '1rem',
        background: '#e0e0ff',
        borderRadius: '8px'
      }}>
        {message}
      </div>
    </div>
  )
}

export default App

