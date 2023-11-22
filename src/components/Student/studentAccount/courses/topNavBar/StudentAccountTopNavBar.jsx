import React from 'react'
import { defaultProfileImageBase64 } from '../../../../../utils/constants'
import StudentAccountTopNavLinks from './StudentAccountTopNavLinks'

const StudentAccountTopNavBar = () => {
  return (
    <div className="bg-gray-800 grow-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-4 px-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={defaultProfileImageBase64}
              alt="Student Avatar"
            />
            <span className="text-base text-white font-semibold">
              {`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}
            </span>
          </div>

          <StudentAccountTopNavLinks />
        </div>
      </div>
    </div>
  )
}

export default StudentAccountTopNavBar;