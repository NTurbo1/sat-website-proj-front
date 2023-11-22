import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudentEnrolledCourseInfo from './StudentEnrolledCourseInfo';
import StudentCourseSectionsList from './courseSection/StudentCourseSectionsList';
import { retrieveCourseByCourseId } from '../../../../Admin/adminAccount/courses/CRUD/CourseCRUD';

const StudentEnrolledCourseIntroPage = () => {

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
      <StudentEnrolledCourseInfo course={course} />

      <StudentCourseSectionsList courseId={courseId}/>
    </div>
  )
}

export default StudentEnrolledCourseIntroPage