import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Otpgenerator from './OtpGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Otpgenerator />
  </StrictMode>,
)
