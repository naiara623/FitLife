import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx'
import Perfil from './pages/Perfil.jsx'

function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
