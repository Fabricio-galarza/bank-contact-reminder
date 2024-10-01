import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18next  from 'i18next';

import App from './App';
import './index.css';
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'


i18next.init({
  interpolation: { escapeValue: false },
  lng: window.location.pathname.substr(1, 2) === 'es' ? 'es': localStorage.getItem('language'),
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App/>
    </I18nextProvider>
  </StrictMode>,
)
