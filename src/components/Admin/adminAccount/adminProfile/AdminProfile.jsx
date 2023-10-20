import React, { useState } from 'react';
import ProfilePhotoChange from './ProfilePhotoChange';
import AdminProfileProvider, { useAdminProfile } from './AdminProfileProvider';
import AboutMe from './AboutMe';
import AdminContacts from './AdminContacts';
import Services from './Services';

const AdminProfile = () => {

  return (
    <AdminProfileProvider>
      <div className="container mx-auto p-4">
        
        <h2 className="text-3xl font-bold text-center mb-6">Admin Profile</h2>

        <ProfilePhotoChange />
        <AboutMe />
        <AdminContacts />
        <Services />
      </div>
    </AdminProfileProvider>
  );
};

export default AdminProfile;