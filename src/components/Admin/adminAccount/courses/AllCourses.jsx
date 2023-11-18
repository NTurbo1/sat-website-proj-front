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
    <div className='w-screen'>
      {
        <Outlet />
          &&
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center pb-4 pt-4">Courses</h2>

          <div className="flex justify-center pb-5">
            <Link 
              to={pageUrls.newCourseForm}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
            >
              Add Course
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-5 pb-8">
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
