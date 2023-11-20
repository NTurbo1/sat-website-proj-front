import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveCourseByCourseId } from '../CRUD/CourseCRUD';
import CourseInfo from './CourseInfo';
import CourseSectionsList from './courseSection/CourseSectionsList';

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

      <CourseSectionsList courseId = {courseId}/>
    </div>
  );
};

export default CoursePage;