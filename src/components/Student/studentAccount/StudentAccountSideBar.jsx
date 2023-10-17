import React from 'react'
import { defaultProfileImageBase64 } from '../../../utils/constants'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/authentication/AuthProvider'
import pageUrls from '../../../utils/pageUrls'

const StudentAccountSideBar = () => {

  const { handleLogOut } = useAuth();
  const navigate = useNavigate()

  return (
    <div className="w-1/5 bg-gray-800 text-gray-100">
      <div className="p-5">
        <div className="flex items-center space-x-4 p-2">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={defaultProfileImageBase64} // The user can set their own pictures later
            alt="User Avatar"
          />
          <span className="text-lg font-semibold">
            {`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}
          </span>
        </div>
        <ul className="mt-6">
          <Link to={'profile'}>
            <li className="px-3 py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
          </Link>
          <Link to={'courses'}>
            <li className="px-3 py-2 hover:bg-gray-700 cursor-pointer">Enrolled courses</li>
          </Link>
          <Link to={'mock-tests'}>
            <li className="px-3 py-2 hover:bg-gray-700 cursor-pointer">Mock tests</li>
          </Link>
          <Link to={'/'}>
            <li className="px-3 py-2 hover:bg-gray-700 cursor-pointer text-blue-400">Home</li>
          </Link>
          <li className="px-3 py-2 hover:bg-gray-700 cursor-pointer text-red-400">
            <button 
              onClick={handleLogOut}
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StudentAccountSideBar