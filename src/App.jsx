import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/userHome' element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
          }></Route>
        <Route path='/userLogin' element={<UserLogin/>} />
        <Route path='/userSignup' element={<UserSignup/>} />
        <Route path='/captainLogin' element={<CaptainLogin/>} />
        <Route path='/captainSignup' element={<CaptainSignup/>} />
        <Route path='/captainHome' element={<CaptainProtectedWrapper>
          <CaptainHome/>
        </CaptainProtectedWrapper>
          }/>
          <Route path='/captainLogout' element={
            <CaptainProtectedWrapper>
              <CaptainLogout/>
            </CaptainProtectedWrapper>
          }/>
        <Route path='/userLogout' element={<UserProtectedWrapper>

          <UserLogout/>
        </UserProtectedWrapper>}/>
    </Routes>
  )
}

export default App