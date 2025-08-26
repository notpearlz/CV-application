import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import GeneralForm from './components/general-form.jsx'
import EducationForm from './components/education-form.jsx'
import ExperienceForm from './components/experience-form.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <form id='CV'>
      <GeneralForm />
      <EducationForm />
      <ExperienceForm />
    </form>
  </StrictMode>,
)
