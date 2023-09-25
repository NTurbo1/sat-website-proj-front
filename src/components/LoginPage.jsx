import React from "react";
import { useState } from "react"
import jwtDecode from "jwt-decode";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        const usernameValue = event.target.value;
        setUsername(usernameValue);
        console.log("Username: " + username)
    }

    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        console.log("Password: " + password);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        const response = await fetch(
            "http://localhost:8080/api/v1/auth/authenticate",
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
            
        } else {
            console.error("Failed to authenticate:", response.statusText);
        }

        setUsername("");
        setPassword("");

        } catch (error) {
        console.error("An error occurred:", error);
        }
    }


    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-8">
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

            {/* <div className="mb-4">
            <label htmlFor="roles" className="block text-gray-600 font-semibold">Roles</label>
                <select id="roles" 
                        onChange={handleRoleChange}
                        className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                >
                <option value={""} disabled selected>Select your role</option>
                <option value={"STUDENT"}>Student</option>
                <option value={"INSTRUCTOR"}>Instructor</option>
                </select>
            </div> */}

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