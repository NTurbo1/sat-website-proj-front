import React from 'react';
import AdminAccountSideBar from './AdminAccountSideBar';
import { Outlet } from 'react-router-dom';

const AdminAccountPage = ({ includeSideBar = true }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {includeSideBar && <AdminAccountSideBar />}

      <Outlet />
    </div>
);
};

export default AdminAccountPage;