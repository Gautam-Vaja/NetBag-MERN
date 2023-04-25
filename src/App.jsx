import React from 'react'
import Header from './assets/Components/Layouts/Header'
import Footer from './assets/Components/Layouts/Footer'
import Home from './assets/Components/Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './assets/Components/Pages/ProductDetails.jsx'
import Products from './assets/Components/Pages/Products'


function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/products/:keyword' element={<Products />} />


        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
