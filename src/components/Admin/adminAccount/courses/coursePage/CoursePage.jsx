import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveCourseByCourseId } from '../CRUD/CourseCRUD';
import CourseInfo from './CourseInfo';

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourseWithCourseId = async () => {
      try {
        const retrievedCourse = await retrieveCourseByCourseId(courseId);
        setCourse(retrievedCourse);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    fetchCourseWithCourseId();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <CourseInfo course={course} />

      {/* Buttons for Sections and Topics */}
      <div className="flex space-x-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create Section
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Update Section
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete Section
        </button>
      </div>

      <div className="flex space-x-4 mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Create Topic
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Update Topic
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete Topic
        </button>
      </div>
    </div>
  );
};

export default CoursePage;