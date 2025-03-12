import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from 'axios'
const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {setUser}=useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    
    if (!token) {
      navigate("/userLogin");
    }
    else{
      axios.get(`${import.meta.env.VITE_BASE_URL}/users/getProfile`,{
        headers:{
          Authorization: `Bearers ${token}`
        }
      })
      .then((response)=>{
        if(response.status==200){
          setUser(response.data.user);
          setIsLoading(false)
        }
      })
      .catch(err=>{
        console.log(err.response.data.error);
        localStorage.removeItem("token");
        navigate('/userLogin');
      })
      
    }

  }, [token]);
  if(isLoading){
    return (
      <div>Loading...</div>
    )
  }
  return <div>{children}</div>;
};

export default UserProtectedWrapper;
