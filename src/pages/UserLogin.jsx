import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const submitHandler=(e)=>{
    e.preventDefault();
    setUserData({
      email,password
    })
 
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 h-screen w-full flex flex-col justify-between items-center '>
      <div className='w-full'>
      <img className= 'h-20 w-30' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" srcset="" />
        <form onSubmit={submitHandler} className='mt-6'>
          <h3 className='text-2xl font-[Uber Medium] font-semibold mb-6'>What's your email?</h3>
          <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
           className='bg-[#eeeeee] px-5 rounded-md py-2 mb-6 w-full text-xl placeholder:text-base outline-none' type="email" name="email" placeholder='example@gmail.com' />
          <h3 className='text-2xl font-[Uber Light] font-semibold mb-4'>Enter your password:</h3>
          <input
           value={password}
           onChange={(e)=>{
             setPassword(e.target.value)
           }}
           className='bg-[#eeeeee] px-5 rounded-md py-2 mb-6 w-full text-xl placeholder:text-base outline-none' type="password" name="password"  placeholder='password' />
          <button className='bg-black text-white rounded-md mb-6 px-4 py-3 w-full text-xl font-semibold' type="submit">Login</button>
        </form>
        <p className='text-lg flex justify-center items-center'>New here? <Link to={'/userSignup'} className='text-blue-500'> Create New account</Link></p>
      </div>
      <div className='w-full'>
        <Link to={'/captainLogin'}>
          <button className='text-xl mb-10 w-full text-white font-semibold bg-[#10b461] px-4 py-3 rounded'>Sign in as Captain</button>
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
