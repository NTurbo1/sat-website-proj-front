import React, { useState, useEffect } from 'react'
import StudentEnrolledCourseInfo from './StudentEnrolledCourseInfo';
import { Outlet, useParams } from 'react-router-dom';
import { retrieveCourseByCourseId } from '../../../../Admin/adminAccount/courses/CRUD/CourseCRUD';
import StudentAccountTopNavBar from '../topNavBar/StudentAccountTopNavBar';
import StudentCourseSectionsList from './courseSection/StudentCourseSectionsList';

const StudentEnrolledCoursePage = () => {

  return (
    <div>
      <StudentAccountTopNavBar />
      
      <Outlet />
    </div>
  )
}

export default StudentEnrolledCoursePage