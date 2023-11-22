import React, { useEffect, useState } from 'react'
import { retrieveAllCoursesByStudentId } from '../../../Admin/adminAccount/courses/CRUD/CourseCRUD';
import { useAuth } from '../../../auth/AuthProvider';
import StudentEnrolledCourseCard from './StudentEnrolledCourseCard';

const StudentCourses = () => {

  const [courses, setCourses] = useState([]);

  const { handleLogOut } = useAuth();

  useEffect(() => {
    const fetchAllStudentCourses = async () => { // should retrieve the user enrolled courses
      const retrievedCourses = await retrieveAllCoursesByStudentId(
        localStorage.getItem("userId")
      );
      setCourses(retrievedCourses);
    };

    fetchAllStudentCourses();
  }, []);

  return (
    <div className="w-4/5 container mx-auto p-4">
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