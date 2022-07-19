import { BrowserRouter } from 'react-router-dom'

// Router
import { Router } from './Router'

// Styles
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}
