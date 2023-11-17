import React, { useContext } from 'react';
import AvailableCourseCard from './AvailableCourseCard';
import { AvailableCoursesContext } from '../../../../appContext/availableCoursesContext';

const AvailableCourses = () => {

  const { courses, studentCourses } = useContext(AvailableCoursesContext);

  return (
      <div className="min-h-screen bg-gray-100">
        {/* Course Cards */}
        <div className="container mx-auto p-4 flex flex-wrap justify-center">
          {courses.map(course => (
            <AvailableCourseCard 
              key={course.id} 
              course={course} 
              studentCourses={studentCourses}/>
          ))}
        </div>
      </div>
  );
};

export default AvailableCourses;