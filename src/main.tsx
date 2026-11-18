import { StrictMode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LanguageProvider from './i18n/LanguageProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
      <Analytics />
    </LanguageProvider>
  </StrictMode>,
)
