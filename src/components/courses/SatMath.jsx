import React from 'react'

// Should be retrieved from db later
const coursesData = [
    {
        id: 1,
        title: 'SAT math course 1.',
        description: 'SAT math course 1.',
    },
    {
        id: 2,
        title: 'SAT math course 2.',
        description: 'SAT math course 2.',
    },
    {
        id: 3,
        title: 'SAT math course 3.',
        description: 'SAT math course 3.',
    },
    {
        id: 4,
        title: 'SAT math course 4.',
        description: 'SAT math course 4.',
    },
];

const SatMath = () => {

    const handleCourseClick = (courseId) => {
        // Add navigattion to the course page 
        console.log(`Clicked on course with ID: ${courseId}`);
    }; 
      
    return (
        <div className="bg-gray-100 py-16 grow">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-8">
                SAT Math Courses Available
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData.map((course) => (
                    <div
                    key={course.id}
                    className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => handleCourseClick(course.id)}
                    >
                    <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                    <p className="text-gray-700">{course.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default SatMath