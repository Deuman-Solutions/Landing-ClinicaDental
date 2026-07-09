import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {LandingApp} from './app/LandingApp'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LandingApp />
    </QueryClientProvider>
  </StrictMode>,
)
