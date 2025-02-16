import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1515543582370-4cff31e54e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D)] bg-no-repeat bg-cover bg-center h-screen w-full flex flex-col justify-between'>
       <div className='ml-5 mt-10'><img className= 'h-20 w-30' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="" srcset="" /></div>
          
        <div className='w-full bg-white px-4 py-6   '>
            <h2 className='text-3xl  font-bold '>Get Started with Uber</h2>
       
                <Link className=' mt-8 text-2xl mb-4  flex items-center justify-center bg-black text-white px-3 py-4 w-full rounded-lg' to={'/userLogin'} >Continue</Link>
           
        </div>
    </div>
  )
}

export default Home