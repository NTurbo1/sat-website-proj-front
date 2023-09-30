import React from "react";
import { useState } from "react"
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { apiEndpoints } from "../utils/apiEndpoints";

const LoginPage = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userLoggedIn, setUserLoggedIn] = useState(true)

    const handleUsernameChange = (event) => {
        const usernameValue = event.target.value;
        setUsername(usernameValue);
    }

    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitted!!!");

        try {
            const response = await fetch(
                apiEndpoints.authenticate,
                {
                    method: "POST", 
                    body: JSON.stringify({
                        email: username,
                        password: password
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }
            );
        
            if (response.ok) {
                const data = await response.json();
                const decodedToken = jwtDecode(data.token);
                const roles = decodedToken.roles;
                console.log("Roles: " + roles);
                localStorage.setItem("jwtToken", data.token);
                console.log("JWT: " + data.token);
                setUsername("");
                setPassword("");

                navigate('/')
                
            } else {
                setUserLoggedIn(false)
                console.error("Failed to authenticate:", response.statusText);
            }

        } catch (error) {
            console.error("An error occurred:", error);
        }
    }


    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-8">
        
        {
            !userLoggedIn 
                && 
            <div className="flex justify-center items-center bg-red-300 p-5 rounded-lg">
                <span>Your username or password is INCORRECT!</span>
            </div>
        }

        <span className="text-3xl">Login</span>

        <form className="bg-white p-8 rounded shadow-md">
            <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 font-semibold">Email</label>
            <input id="username"
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