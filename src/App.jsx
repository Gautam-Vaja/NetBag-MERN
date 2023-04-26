import React from 'react'
import Header from './assets/Components/Layouts/Header'
import Footer from './assets/Components/Layouts/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './assets/Components/Pages/ProductDetails.jsx'
import Products from './assets/Components/Pages/Products'
import Registration from './assets/Components/Pages/Customers/Registration'
import Login from './assets/Components/Pages/Customers/Login'


function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/products/:keyword' element={<Products />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/signin' element={<Login />} />


        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
