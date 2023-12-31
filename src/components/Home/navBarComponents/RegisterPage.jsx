import React from "react";
import { useState } from "react";
import { apiEndpoints } from "../../../utils/api/apiEndpoints";
import { registrationState, userRoles } from "../../../utils/constants";
import { Link } from "react-router-dom";
import pageUrls from "../../../utils/pageUrls/pageUrls";

const RegisterPage = () => {

  const [isRegisterSuccess, setRegisterSuccess] = useState(registrationState.neverTried) 

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleFirstNameChange = (event) => {
      const firstNameValue = event.target.value;
      setFirstName(firstNameValue);
  }

  const handleLastNameChange = (event) => {
      const lastNameValue = event.target.value;
      setLastName(lastNameValue);
  }

  const handleUsernameChange = (event) => {
      const usernameValue = event.target.value;
      setUsername(usernameValue);
  }

  const handlePasswordChange = (event) => {
      const passwordValue = event.target.value;
      setPassword(passwordValue);
  }

  const handleRoleChange = (event) => {
      const roleValue = event.target.value;
      setRole(roleValue);
  }

  const handleSubmit = async (event) => {
      event.preventDefault();

      try {
          const response = await fetch(
              apiEndpoints.register,
              {
                  method: "POST", 
                  body: JSON.stringify({
                      firstname: firstName,
                      lastname: lastName,
                      email: username,
                      password: password,
                      roles: [role]
                  }),
                  headers: {
                      'Content-type': 'application/json; charset=UTF-8'
                  }
              }
          );
      
          if (response.ok) {
              setRegisterSuccess(registrationState.success)
          } else {
              setRegisterSuccess(registrationState.error)
              console.error("Failed to authenticate:", response.statusText);
          }

          setFirstName("");
          setLastName("");
          setUsername("");
          setPassword("");
          setRole("");

      } catch (error) {
          console.error("An error occurred:", error);
      }
  }


  return (
  
    <div className="bg-gray-100 grow p-6 flex flex-col items-center justify-center gap-8">
      
      {
          isRegisterSuccess === registrationState.success ?
          <div className="flex justify-center items-center bg-green-300 p-5 rounded-lg">
            <span>Your have been registered! Please, <Link to={pageUrls.login} className="text-blue-700 hover:underline">log in</Link> now.</span>
          </div>
            : isRegisterSuccess === registrationState.error ?
          <div className="flex justify-center items-center bg-red-300 p-5 rounded-lg">
              <span>There has been an error during registration. You can try later.</span>
          </div>
            : 
          <div></div>
      }
      
      <span className="text-3xl">Register</span>

      <form className="bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-600 font-semibold">First name</label>
          <input id="firstName"
              value={firstName}
              onChange={handleFirstNameChange} 
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400" 
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-600 font-semibold">Last name</label>
          <input id="lastName"
              value={lastName}
              onChange={handleLastNameChange} 
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400" 
          />
        </div>

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

        <div className="mb-4">
          <label htmlFor="roles" className="block text-gray-600 font-semibold">Roles</label>
          <select id="roles"
                  value={role}
                  onChange={handleRoleChange}
                  className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
          >
              <option value={""} disabled selected>Who are you?</option>
              <option value={userRoles.student}>Student</option>
          </select>
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

export default RegisterPage;