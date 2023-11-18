import React from 'react'
import { defaultProfileImageBase64 } from '../../../utils/constants'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthProvider'
import pageUrls from '../../../utils/pageUrls'

const AdminAccountSideBar = () => {

  const { handleLogOut } = useAuth();

  return (
    <div className="w-1/6 bg-gray-800 text-gray-100">
      <div className="flex items-center space-x-4 px-3 pt-5">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={defaultProfileImageBase64} // The admin can set their own pictures later
          alt="Admin Avatar"
        />
        <span className="text-base font-semibold">
          {`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}
        </span>
      </div>
      <ul className="mt-6">
        <Link to={pageUrls.adminDashboard}>
          <li className="px-5 py-2 hover:bg-gray-700 cursor-pointer text-sm">Dashboard</li>
        </Link>
        <Link to={pageUrls.adminProfile}>
          <li className="px-5 py-2 hover:bg-gray-700 cursor-pointer text-sm">Profile</li>
        </Link>
        <Link to={pageUrls.courses}>
          <li className="px-5 py-2 hover:bg-gray-700 cursor-pointer text-sm">Courses</li>
        </Link>
        <Link to={pageUrls.allStudents}>
          <li className="px-5 py-2 hover:bg-gray-700 cursor-pointer text-sm">All students</li>
        </Link>
        <Link to={pageUrls.home}>
          <li className="px-5 py-2 hover:bg-gray-700 cursor-pointer text-blue-400 text-sm">Home</li>
        </Link>
        <li className="px-5 py-2 hover:bg-gray-700 cursor-pointer text-red-400 text-sm">
          <button 
            onClick={handleLogOut}
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  )
}

export default AdminAccountSideBar