import React from 'react';
import CourseCard from './CourseCard';

const courses = [ //price in $
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Learn the basics of React.js and build your first application.',
    price: '49.99', 
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Master advanced JavaScript concepts and improve your coding skills.',
    price: '79.99',
  },
  // Add more courses as needed
];

const AvailableCourses = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Course Cards */}
      <div className="container mx-auto p-4 flex flex-wrap justify-center">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCourses;