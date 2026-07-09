import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {LandingApp} from './app/LandingApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingApp />
  </StrictMode>,
)
