import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarDefault from './components/NavbarDefault'
import Button from './components/Button'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Footer from './components/Footer'
import About1 from './pages/About1'
import Login from './pages/Login'
import Contact from './pages/Contact'
import ShowListPage from "./pages/ShowListPage";
import CreateShowPage from "./pages/CreateShowPage";
import ShowDetailsPage from "./pages/ShowDetailsPage";
import EditShowPage from "./pages/EditShowPage"; 
import DeleteShow from "./pages/DeleteShow";
import './App.css'

function App() {
  const [loginUser, setLoginUser] = useState(null)


  return (
    <>    
   <NavbarDefault /> 

      <Routes>
      <Route path="/about" element={<About1 />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login setLoginUser={setLoginUser} />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/contactus" element={<Contact />}/>
      <Route path="/shows" element={<ShowListPage />} />
      <Route exact path="/shows/create" element={<CreateShowPage />} /> 
      <Route exact path="/shows/delete" element={<DeleteShow />} /> 
      <Route path="/shows/:showId" element={<ShowDetailsPage />} /> 
      <Route path="/shows/edit/:projectId" element={ <EditShowPage /> } />
      <Route path="*" element={ <ErrorPage /> } />
      </Routes>

      <Footer />
    </>
    
  )
}
export default App
