import React from "react";

const StudentEnrolledCourseCard = ({ course }) => {

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm">
      <h2 className="text-xl font-bold mb-2">{course.name}</h2>
      <p className="text-gray-700 text-base mb-4">{course.description}</p>
      <div className="flex justify-between items-center">

      </div>
    </div>
  )
}

export default StudentEnrolledCourseCard;