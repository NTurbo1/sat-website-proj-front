import React from 'react';
import StudentAccountSideBar from './StudentAccountSideBar';
import { Outlet } from 'react-router-dom';

const StudentAccountPage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <StudentAccountSideBar />

      <Outlet />
    </div>
  );
};

export default StudentAccountPage;