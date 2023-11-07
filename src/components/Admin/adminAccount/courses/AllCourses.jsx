import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import pageUrls from '../../../../utils/pageUrls';
import { retrieveAllCourses } from './CRUD/CourseCRUD';
import CourseCard from './CourseCard';
import { useAuth } from '../../../auth/AuthProvider';

const AllCourses = () => {

  const [courses, setCourses] = useState([]);

  const { handleLogOut } = useAuth();

  useEffect(() => {
    const fetchAllCourses = async () => {
      const retrievedCourses = await retrieveAllCourses(handleLogOut);
      console.log(retrievedCourses);
      setCourses(retrievedCourses);
    };

    fetchAllCourses();
  }, []);

  return (
    <div className='w-4/5'>
      {
        <Outlet />
          &&
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold text-center mb-4">Courses</h2>

          <div className="flex pl-4 pb-4">
            <Link 
              to={pageUrls.newCourseForm}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Add Course
            </Link>
          </div>

          <div className="flex flex-wrap gap-5 px-10">
            {courses.map((course, index) => (
              <CourseCard course={course} key={index}/>
            ))}
          </div>

        </div>
      }
    </div>
  );
};

export default AllCourses;
