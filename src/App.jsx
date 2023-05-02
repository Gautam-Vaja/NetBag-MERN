import React from 'react'
import Header from './assets/Components/Layouts/Header'
import Footer from './assets/Components/Layouts/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './assets/Components/Pages/ProductDetails.jsx'
import Products from './assets/Components/Pages/Products'
import Registration from './assets/Components/Pages/Customers/Registration'
import Login from './assets/Components/Pages/Customers/Login'
import store from "./Store"
import { useEffect } from 'react'
import { cleanErrors, loadUser } from './assets/Components/Services/Actions/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { ClearErrors } from './assets/Components/Services/Actions/ProductAction'
import Profile from './assets/Components/Pages/Customers/Profile'
import EditProfile from './assets/Components/Pages/Customers/EditProfile'


function App() {
  const dispatch = useDispatch()
  const { loading, isAuthenticated, user, userimg, role, error } = useSelector(state => state.UserReducer)


  useEffect(() => {

    dispatch(loadUser())
  }, [dispatch])



  return (

    <>


      <Router>
        <Header ProfilePic={{ userimg, role, isAuthenticated, user }} />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/products/:keyword' element={<Products />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/account' element={<Profile />} />
          <Route path='/edit-profile' element={<EditProfile />} />


        </Routes>
        <Footer />
      </Router>


    </>
  )
}

export default App
