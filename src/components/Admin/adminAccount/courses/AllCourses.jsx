import React, { useState } from 'react';
import CourseBox from './CourseBox';

const Courses = () => {

  // should be fetched from the server later
  const [courses, setCourses] = useState([
    { name: 'Mathematics', info: 'Learn fundamental math concepts.', price: 100 },
    { name: 'Physics', info: 'Explore the world of physics.', price: 120 },
    { name: 'Chemistry', info: 'Discover the basics of chemistry.', price: 110 },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Courses</h2>

      <div className='flex flex-wrap gap-8'>
        {courses.map((course, index) => (
          <CourseBox course={course} 
            index={index} 
            courses={courses}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
