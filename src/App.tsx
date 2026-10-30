import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Explore } from './pages/Explore'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Confirmation } from './pages/Confirmation'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/registrar" element={<Register />} />
      <Route path="/confirmacao" element={<Confirmation />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
