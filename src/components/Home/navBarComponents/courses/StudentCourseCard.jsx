import React from "react";

const StudentCourseCard = ({course}) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-72">
      {/* <img className="w-full" src={course.image} alt={course.name} /> */}
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{course.name}</div>
        {/* <p className="text-gray-700 text-base mb-2">{course.description}</p> */}
        <div className="flex flex-col">
          <div className="text-gray-600 text-base">{course.type}</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {course.price} <span className='text-sm font-bold font-mono'>₸</span>
        </span>
      </div>
    </div>
  );
}

export default StudentCourseCard;