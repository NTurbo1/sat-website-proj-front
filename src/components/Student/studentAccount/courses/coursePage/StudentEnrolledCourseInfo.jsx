import React from 'react'

const StudentEnrolledCourseInfo = ({ course }) => {

  return (
    <div className="bg-white shadow-md rounded px-8 py-6 mb-8">
      <h1 className="text-2xl font-bold mb-4">{course.name}</h1>

      <div className="mb-4">
        <h2 className='text-lg font-bold'>Description</h2>
        <span className='text-gray-700'>{course.description}</span>
      </div>

      <div className="mb-4">
        <h2 className='text-lg font-bold'>Type</h2> 
        <span className='text-gray-700'>{course.type}</span>
      </div>

      <div className="mb-4">
        <h2 className='text-lg font-bold'>Price</h2> 
        <span className='text-gray-700'>{course.price} 
          <span className='text-lg font-black'>₸</span>
        </span>
      </div>
    </div>
  )
}

export default StudentEnrolledCourseInfo