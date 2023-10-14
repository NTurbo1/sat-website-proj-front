import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { defaultProfileImageBase64, userRoles } from '../../utils/constants'
import { AuthContext } from '../appContext/authContext'

const ProfileDropDown = () => {

  const { setLoggedIn } = useContext(AuthContext)
  console.log('Profile setLoggedIn: ' + setLoggedIn);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setLoggedIn(false)
    localStorage.removeItem('jwtToken')
  }

  return (
    <div className="relative inline-block text-left z-50">
      <div>
        <button
            onClick={toggleDropdown}
            type="button"
            className="text-white text-sm hover:text-gray-300 focus:outline-none focus:text-gray-300 flex items-center"
        >
          <span className="text-white text-lg pr-2">
            {`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}
          </span>
          <img
            src={defaultProfileImageBase64}
            alt="Profile"
            className="inline-block h-6 w-6 rounded-full"
          />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-2">
            <Link
                to={
                  localStorage.getItem('roles').includes(userRoles.student) ? '/student/account'
                  : localStorage.getItem('roles').includes(userRoles.instructor) ? 'instructor/account'
                  : '#' // should be fixed later
                }
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Account
            </Link>

            <button 
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex justify-start"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown