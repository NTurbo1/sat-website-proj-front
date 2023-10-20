import React from 'react'
import { useAdminProfile } from './AdminProfileProvider'

const AboutMe = () => {

  const { aboutMe, handleAboutMeChange } = useAdminProfile();

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">About Me</h3>
      <textarea
        value={aboutMe}
        onChange={handleAboutMeChange}
        className="border border-gray-300 p-2 w-full"
        rows="4"
      />
    </div>
  )
}

export default AboutMe