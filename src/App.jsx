import React from 'react'
import Header from './assets/Components/Layouts/Header'
import Footer from './assets/Components/Layouts/Footer'
import Home from './assets/Components/Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './assets/Components/Pages/ProductDetails.jsx'


function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetails />} />


        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
