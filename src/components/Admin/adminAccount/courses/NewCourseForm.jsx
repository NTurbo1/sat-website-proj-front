import React, { useState } from 'react';
import { createCourse } from './CRUD/CourseCRUD';
import { courseStatus, courseType } from './CRUD/CourseConstants';
import { useNavigate } from 'react-router-dom';
import pageUrls from '../../../../utils/pageUrls';

const NewCourseForm = () => {

  const [newCourse, setNewCourse] = useState(
    {
      name: "",
      description: "",
      type: "",
      status: courseStatus.inactive,
      price: 0
    }
  );

  const navigate = useNavigate();

  const handleCreateCourse = async () => {
    const isCreated = await createCourse(newCourse);

    if (isCreated) {
      navigate(pageUrls.courses);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100">
      <div className="bg-white p-8 m-10 rounded shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-4 text-center">Create New Course</h2>
        <form>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="new-course-name">
              Course Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="new-course-name"
              type="text"
              placeholder="Enter course name"
              value={newCourse.name}
              onChange={(event) =>
                setNewCourse({...newCourse, name: event.target.value})
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="new-course-description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="new-course-description"
              rows="3"
              placeholder="Enter course description"
              value={newCourse.description}
              onChange={(event) => {
                setNewCourse({...newCourse, description: event.target.value});
              }}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="new-course-type">
              Type
            </label>
            <select
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
              id="new-course-type"
              value={newCourse.type}
              onChange={(event) => 
                setNewCourse({...newCourse, type: event.target.value})}
            >
              <option value={""} disabled selected>Course Type</option>
              {
                Object.entries(courseType).map(([key, value]) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))
              }
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="new-course-status">
              Status
            </label>
            <select
              className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
              id="new-course-status"
              value={newCourse.status}
              onChange={(event) => 
                setNewCourse({...newCourse, status: event.target.value})}
            >
              {
                Object.entries(courseStatus).map(([key, value]) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))
              }
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-course-price">
              Course Price
            </label>
            <div className='flex gap-2'>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="new-course-price"
                type="number"
                placeholder="Enter course price"
                value={newCourse.price}
                onChange={(event) => {
                  setNewCourse({...newCourse, price: event.target.value});
                }}
              />

              <div className='flex justify-center items-center'>
                <span className='text-2xl font-medium font-mono'>
                  ₸
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCreateCourse}
            >
              Create Course
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default NewCourseForm;