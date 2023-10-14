import './App.css'
import { useState } from 'react'
import { AuthContext } from './components/appContext/authContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("jwtToken") !== null)

  return (
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext.Provider>
  )
}

export default App