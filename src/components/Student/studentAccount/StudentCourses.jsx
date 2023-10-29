import React from 'react'

const StudentCourses = () => {

  const courses = [
    {
      name: 'SAT Math Advanced',
      description: 'Advanced SAT Math course focusing on complex problem-solving strategies.',
      instructor: 'John Smith',
    },
    {
      name: 'SAT Reading Comprehension Techniques',
      description: 'Comprehensive course to enhance reading comprehension skills for the SAT exam.',
      instructor: 'Emily Johnson',
    },
    {
      name: 'SAT Writing Strategies',
      description: 'Effective writing strategies to excel in the SAT Writing section.',
      instructor: 'Michael Williams',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Enrolled Courses</h2>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                Drop course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentCourses