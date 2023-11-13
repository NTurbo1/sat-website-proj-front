import React, { useState, useEffect } from 'react';
import AvailableCourseCard from './AvailableCourseCard';
import { retrieveAllCourses } from '../../../Admin/adminAccount/courses/CRUD/CourseCRUD';
import { useAuth } from '../../../auth/AuthProvider';
import { courseStatus } from '../../../Admin/adminAccount/courses/CRUD/CourseConstants';

const AvailableCourses = () => {

  const [courses, setCourses] = useState([]);
  const { handleLogOut } =  useAuth();

  useEffect(() => {
    const fetchAllActiveCourses = async () => {
      const retrievedCourses = await retrieveAllCourses(handleLogOut, courseStatus.active);
      setCourses(retrievedCourses);
    };

    fetchAllActiveCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Course Cards */}
      <div className="container mx-auto p-4 flex flex-wrap justify-center">
        {courses.map(course => (
          <AvailableCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCourses;