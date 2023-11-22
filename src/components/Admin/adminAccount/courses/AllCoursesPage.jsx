import React from 'react';
import { Outlet, Route } from 'react-router-dom';
import AdminAccountTopNavBar from '../topNavBar/AdminAccountTopNavBar';

const AllCoursesPage = () => {
  return (
    <>
    <AdminAccountTopNavBar />

    <Outlet />
    </>
  )
}

export default AllCoursesPage