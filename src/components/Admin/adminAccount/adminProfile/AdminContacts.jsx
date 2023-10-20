import React from 'react'
import { useAdminProfile } from './AdminProfileProvider'

const AdminContacts = () => {

  const { contacts, handleContactsChange } = useAdminProfile();

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2">Contacts</h3>
      <input
        type="text"
        value={contacts}
        onChange={handleContactsChange}
        className="border border-gray-300 p-2 w-full"
      />
    </div>
  )
}

export default AdminContacts