import React from 'react'
import { useAdminProfile } from './AdminProfileProvider'

const Services = () => {

  const { services, handleServicesChange } = useAdminProfile();

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Services</h3>
      <textarea
        value={services}
        onChange={handleServicesChange}
        className="border border-gray-300 p-2 w-full"
        rows="4"
      />
    </div>
  )
}

export default Services