import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Groups from './groups.jsx'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Navbar.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/groups/:label" element={<Groups/>}></Route>
        <Route path="*" element={<div>
          <NavBar />
          Page not found
          </div>}>
        </Route>
      </Routes>
    </BrowserRouter>
,
)
