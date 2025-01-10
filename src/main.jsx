import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')
const app = createRoot(rootElement)

app.render(
  <StrictMode>
    <App />
  </StrictMode>
  )
