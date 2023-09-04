import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Footer from './components/Footer'
import Contact from './views/Contact'
import Research from './views/Research'
import Teaching from './views/Teaching'
import { Helmet } from "react-helmet";
// import Modal from './components/Modal'

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar />
        {/* <Modal /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/reaserch' element={<Research />} />
          <Route path='/teaching' element={<Teaching />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
