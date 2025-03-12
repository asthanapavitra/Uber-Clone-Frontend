import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios'
const CaptainProtectedWrapper = ({children}) => {
    const navigate=useNavigate();
    const token=localStorage.getItem("token");
    const {captain,setCaptain}=useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        if(!token){
            navigate('/captainLogin');
        }
        else{
          axios.get(`${import.meta.env.VITE_BASE_URL}/captains/getProfile`,{
            headers:{
              Authorization: `Bearers ${token}`
            }
          })
          .then((response)=>{
            if(response.status==200){
              setCaptain(response.data.captain);
              setIsLoading(false)
            }
          })
          .catch(err=>{
            console.log(err.response.data.error);
            localStorage.removeItem("token");
            navigate('/captainLogin');
          })
          
        }

    },[token])
    
    if(isLoading){
      return (
        <div>Loading....</div>
      )
    }
  return (
    <div>{children}</div>
  )
}

export default CaptainProtectedWrapper