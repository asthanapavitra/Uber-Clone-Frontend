import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import axios from "axios";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      fullName: {
        firstName,
        lastName,
      },
    };
    try {
     
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );
      
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token",data.token);
        navigate("/userHome");
      }
    } catch (error) {
      console.error("Error registering user:", error.response.data.error);
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 h-screen w-full flex flex-col justify-between items-center">
      <div className="w-full">
        <img
          className="h-20 w-30"
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler} className="mt-6">
          <h3 className="text-lg font-semibold mb-4">What's your name?</h3>
          <div className="flex gap-4 mb-6">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] px-5 rounded-md py-2 w-1/2 text-xl placeholder:text-base outline-none"
              type="text"
              name="firstName"
              placeholder="Firstname"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] px-5 rounded-md py-2 w-1/2 text-xl placeholder:text-base outline-none"
              type="text"
              name="lastName"
              placeholder="Lastname"
            />
          </div>
          <h3 className="text-lg font-semibold mb-4">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] px-5 rounded-md py-2 mb-6 w-full text-xl placeholder:text-base outline-none"
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />
          <h3 className="text-lg font-semibold mb-4">Enter your password:</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] px-5 rounded-md py-2 mb-6 w-full text-xl placeholder:text-base outline-none"
            type="password"
            name="password"
            placeholder="password"
          />
          <div className="flex items-start space-x-2 mb-6">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              className="mt-1"
              required
            />
            <label htmlFor="consent" className="text-[12px] leading-tight">
              By registering, you agree to receive communications from us,
              including calls, emails, and messages regarding our services,
              offers, and updates. You can opt out at any time by following the
              unsubscribe instructions in our communications.
            </label>
          </div>
          <button
            className="bg-black text-white rounded-md mb-6 px-4 py-3 w-full text-xl font-semibold"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <p className="text-lg flex justify-center items-center">
          Already Registered?{" "}
          <Link to={"/userLogin"} className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
