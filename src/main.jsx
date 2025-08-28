import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CVApplication from './components/cv-app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CVApplication className='w-full flex center'/>
    
  </StrictMode>,
)
