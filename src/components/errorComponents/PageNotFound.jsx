import React, {useContext} from 'react'
import NavBar from '../NavBar'
import { navBarTitleText } from '../../utils/constants'

const PageNotFound = () => {
  return (
    // <div className='flex flex-col min-h-screen'>

    //   <NavBar 
    //     titleText={navBarTitleText}
    //     logoImg={null}
    //   />

      <div className="flex items-center justify-center grow bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-semibold mb-4">404</h1>
          <p className="text-2xl">Page Not Found</p>
          <p className="text-lg mt-4">The page you are looking for does not exist.</p>
          <button
            className="mt-6 px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    // </div>
  )
}

export default PageNotFound