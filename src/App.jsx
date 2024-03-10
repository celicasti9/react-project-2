import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarDefault from './components/NavbarDefault'
import Button from './components/Button'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Footer from './pages/Footer'
import Login from './pages/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
   <NavbarDefault /> 
   {/*<Button /> */}

      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
