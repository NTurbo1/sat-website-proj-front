import React from 'react'
import NavBar from './NavBar'
import { navBarTitleText } from '../../utils/constants'
import { Outlet } from 'react-router-dom'

const Home = () => {

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar 
        titleText={navBarTitleText}
        logoImg={null}
      />

      <Outlet />
    </div>
  )
}

export default Home