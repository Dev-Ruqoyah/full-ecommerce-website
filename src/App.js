import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar'
import NotFound from './Pages/NotFound'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/productdetails" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App