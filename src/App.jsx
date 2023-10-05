import { createContext, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { navBarTitleText } from './utils/constants'
import { Outlet } from 'react-router-dom'

export const StateContext = createContext()

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <StateContext.Provider value={{
      loginState: [isLoggedIn, setLoggedIn]
    }}>
      <div className='flex flex-col min-h-screen'>
          <NavBar 
              titleText={navBarTitleText}
              logoImg={null}
          />

          <Outlet />
      </div>
    </StateContext.Provider>
  )
}

export default App
