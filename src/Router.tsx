import { Route, Routes } from 'react-router-dom'

// Pages
import { App } from './pages/App'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}
