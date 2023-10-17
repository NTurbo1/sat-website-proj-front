import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { defaultProfileImageBase64, userRoles } from '../../../utils/constants';
import pageUrls from '../../../utils/pageUrls';
import { useAuth } from '../../auth/authentication/AuthProvider';

const ProfileDropDown = () => {

  const { handleLogOut } = useAuth();
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdownOnOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdownOnOutsideClick);
    return () => {
      window.removeEventListener('click', closeDropdownOnOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left z-50" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="text-white text-sm hover:text-gray-300 focus:outline-none focus:text-gray-300 flex items-center"
        >
          <img
            src={defaultProfileImageBase64}
            alt="Profile"
            className="inline-block h-6 w-6 rounded-full"
          />

          <span className="text-white text-lg pl-2">
            {`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-2">
            <Link
              to={
                localStorage.getItem('roles').includes(userRoles.student)
                  ? pageUrls.studentAccount
                  : localStorage.getItem('roles').includes(userRoles.admin)
                  ? pageUrls.adminAccount
                  : '#'
              }
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Account
            </Link>

            <button
              onClick={handleLogOut}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex justify-start"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;