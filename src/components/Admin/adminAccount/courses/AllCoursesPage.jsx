import React from 'react';
import AdminAccountPage from '../AdminAccountPage';
import { Outlet, Route } from 'react-router-dom';
import AllCourses from './AllCourses';
import NewCourseForm from './NewCourseForm';
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