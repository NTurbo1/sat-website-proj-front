import React, {useState, useEffect} from 'react'
import { useAuth } from '../../../../auth/AuthProvider';
import { retrieveAllCourses, retrieveAllCoursesByStudentId } from '../../../../Admin/adminAccount/courses/CRUD/CourseCRUD';
import { AvailableCoursesContext } from '../../../../appContext/availableCoursesContext';
import { Outlet } from 'react-router-dom';
import { courseStatus } from '../../../../Admin/adminAccount/courses/CRUD/CourseConstants';

const AvailableCoursesProvider = () => {

  const [courses, setCourses] = useState([]);
  const [studentCourses, setStudentCourses] = useState([]);
  const { handleLogOut } =  useAuth();

  useEffect(() => {
    const fetchAllActiveCourses = async () => {
      const retrievedCourses = await retrieveAllCourses(handleLogOut, courseStatus.active);
      setCourses(retrievedCourses);
    };

    fetchAllActiveCourses();
  }, []);

  useEffect(() => {
    const fetchAllCoursesByStudentId = async (studentId) => {
      const retrievedCourses = await retrieveAllCoursesByStudentId(studentId);
      setStudentCourses(retrievedCourses);
    }

    const userId = localStorage.getItem("userId");
    if (userId != null) {
      fetchAllCoursesByStudentId(userId);
    }
  }, []);

  return (
    <AvailableCoursesContext.Provider value={{courses, studentCourses}}>
      <Outlet />
    </AvailableCoursesContext.Provider>
  )
}

export default AvailableCoursesProvider