import React from 'react'
import { useAdminProfile } from './AdminProfileProvider'

const ProfilePhotoChange = () => {

  const { profilePhoto, handleProfilePhotoChange } = useAdminProfile();

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Profile Photo</h3>
      <input
        type="file"
        onChange={handleProfilePhotoChange}
        className="border border-gray-300 p-2 mb-2"
      />
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-32 h-32 object-cover rounded-full mx-auto"
      />
    </div>
  )
}

export default ProfilePhotoChange