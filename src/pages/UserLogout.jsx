import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            localStorage.removeItem("token");
            axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    navigate('/userLogin');
                }
            })
            .catch((error) => {
                console.error('Error logging out:', err.response.data.error);
            });
        }
    }, []);

    return (
        <></>
    );
};

export default UserLogout;
