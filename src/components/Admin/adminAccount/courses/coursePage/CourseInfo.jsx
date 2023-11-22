import React from 'react'
import pageUrls from '../../../../../utils/pageUrls/pageUrls'
import { Link, useNavigate } from 'react-router-dom'
import { deleteCourse } from '../CRUD/CourseCRUD'

const CourseInfo = ({ course }) => {

  const navigate = useNavigate();

  const handleDeleteCourse = async () => {
    const isDeleted = await deleteCourse(course.id);
    if (isDeleted) {
      navigate(pageUrls.courses);
    } else {
      // handle properly later
      alert("There was an error deleting course with id = " + course.id);
    }
  }

  return (
    <div className="bg-white shadow-md rounded px-8 py-6 mb-8">
      <h1 className="text-4xl font-bold mb-4">{course.name}</h1>

      <div className="mb-4">
        <h2 className='text-xl font-bold'>Description</h2>
        <span className='text-gray-700'>{course.description}</span>
      </div>

      <div className="mb-4">
        <h2 className='text-xl font-bold'>Type</h2> 
        <span className='text-gray-700'>{course.type}</span>
      </div>

      <div className="mb-4">
        <h2 className='text-xl font-bold'>Status</h2> 
        <span className='text-gray-700'>{course.status}</span>
      </div>

      <div className="mb-4">
        <h2 className='text-xl font-bold'>Price</h2> 
        <span className='text-gray-700'>{course.price} 
          <span className='text-lg font-black'>₸</span>
        </span>
      </div>

      <div className="mb-4">
        <h2 className='text-xl font-bold'>Created Date</h2> 
        <span className='text-gray-700'>{new Date(course.createdDate).toLocaleDateString()}</span>
      </div>

      {/* Update and Delete Course Buttons */}
      <div className="flex items-center">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
          to={pageUrls.updateCourseForm(course.id)}
        >
          Update Course
        </Link>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDeleteCourse}
        >
          Delete Course
        </button>
      </div>
    </div>
  )
}

export default CourseInfo