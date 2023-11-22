import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import pageUrls from "../../../utils/pageUrls/pageUrls";
import { useAuth } from "../../auth/AuthProvider";

const LoginPage = () => {

  const { isLoggedIn, handleLogIn } = useAuth()

  const [isAuthErrPopUpOpen, setAuthErrPopUpOpen] = useState(false)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let authErrorText = "Your username or password is INCORRECT!"

  const handleUsernameChange = (event) => {
    const usernameValue = event.target.value;
    setUsername(usernameValue);
  }

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginSuccess = await handleLogIn(username, password)
      if (loginSuccess) {
        setAuthErrPopUpOpen(false);
        setUsername("");
        setPassword("");
      } else {
        setAuthErrPopUpOpen(true);
      }
    } catch (error) {
      authErrorText = "An error happened in the server :("
    }
  }


  return (
    
    isLoggedIn ? <Navigate to={pageUrls.home} />
      :
    <div className="bg-gray-100 flex flex-col items-center justify-center gap-8 grow">

      {
          isAuthErrPopUpOpen 
              && 
          <div className="flex justify-center items-center bg-red-300 p-5 rounded-lg">
              <span>{authErrorText}</span>
          </div>
      }

      <span className="text-3xl">Login</span>

      <form className="bg-white p-8 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 font-semibold">Email</label>
            <input id="username"
                type="email"
                value={username}
                onChange={handleUsernameChange} 
                className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400" 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-semibold">Password</label>
            <input id="password" 
                value={password}
                onChange={handlePasswordChange}
                className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400" 
                type="password" 
            />
          </div>

          <div className="text-center">
            <button type="submit" 
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Submit
            </button>
          </div>
      </form>
    </div>
  )
}

export default LoginPage