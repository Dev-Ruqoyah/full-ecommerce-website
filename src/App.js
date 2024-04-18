import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App