import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Remove token before making request
      localStorage.removeItem("token");

      axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/captainLogin");
        }
      })
      .catch((err) => {
        console.log("Error while logging out", err.response.data.error);
      });
    } 
  }, []);

  return <div></div>;
};

export default CaptainLogout;
