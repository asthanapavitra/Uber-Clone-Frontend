import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/userLogin' element={<UserLogin/>} />
        <Route path='/userSignup' element={<UserSignup/>} />
        <Route path='/captainLogin' element={<CaptainLogin/>} />
        <Route path='/captainSignup' element={<CaptainSignup/>} />
    </Routes>
  )
}

export default App