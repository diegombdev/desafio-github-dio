import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './globalStyle'
import App from './pages/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
      <App />
  </React.StrictMode>
)

// link do site onde peguei o bagckground
// https://www.deviantart.com/pungpp/art/Naruto-Background-8-813696667