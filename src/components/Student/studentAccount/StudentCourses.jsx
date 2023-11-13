import React, { useEffect, useState } from 'react'
import { retrieveAllCourses, retrieveAllCoursesByStudentId } from '../../Admin/adminAccount/courses/CRUD/CourseCRUD';
import { courseStatus } from '../../Admin/adminAccount/courses/CRUD/CourseConstants';
import { Link } from 'react-router-dom';
import pageUrls from '../../../utils/pageUrls';
import { useAuth } from '../../auth/AuthProvider';
import StudentEnrolledCourseCard from './StudentEnrolledCourseCard';

const StudentCourses = () => {

  const [courses, setCourses] = useState([]);

  const { handleLogOut } = useAuth();

  useEffect(() => {
    const fetchAllActiveCourses = async () => { // should retrieve the user enrolled courses
      const retrievedCourses = await retrieveAllCoursesByStudentId(
        localStorage.getItem("userId")
      );
      setCourses(retrievedCourses);
    };

    fetchAllActiveCourses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">Courses</h2>

      <div className="flex flex-wrap gap-5 px-10">
        {courses.map((course, index) => (
          <StudentEnrolledCourseCard course={course} key={index}/>
        ))}
      </div>

    </div>
  );
}

export default StudentCourses