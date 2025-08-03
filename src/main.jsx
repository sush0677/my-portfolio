import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// Error boundary for development
const root = ReactDOM.createRoot(document.getElementById('root'))

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  console.log('React app rendered successfully!')
} catch (error) {
  console.error('Error rendering app:', error)
  root.render(
    <div style={{ 
      background: 'linear-gradient(135deg, #0c4a6e 0%, #082f49 100%)',
      color: 'white',
      padding: '20px',
      fontFamily: 'Inter, system-ui, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ color: '#0ea5e9', marginBottom: '20px' }}>Sushant Patil</h1>
        <h2 style={{ color: '#38bdf8', marginBottom: '10px' }}>AI Adoptions Coordinator</h2>
        <p style={{ color: '#06b6d4' }}>at Nathan Digital</p>
        <p style={{ marginTop: '20px', opacity: 0.8 }}>
          Portfolio loading... Please refresh the page.
        </p>
        <p style={{ marginTop: '10px', fontSize: '14px', opacity: 0.6 }}>
          Error: {error.message}
        </p>
      </div>
    </div>
  )
} 