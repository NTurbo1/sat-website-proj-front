import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { retrieveCourseByCourseId, updateCourse } from '../CRUD/CourseCRUD';
import { courseStatus, courseType } from '../CRUD/CourseConstants';
import pageUrls from '../../../../../utils/pageUrls';

const UpdateCourseForm = () => {

  const navigate = useNavigate();
  const { courseId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    status: "",
    price: "",
    createdDate: ""
  });

  useEffect(() => {
    const fetchCourseWithCourseId = async () => {
      try {
        const course = await retrieveCourseByCourseId(courseId);
        setFormData({
          name: course.name,
          description: course.description,
          type: course.type,
          status: course.status,
          price: course.price,
          createdDate: course.createdDate,
        });

      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    fetchCourseWithCourseId();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = () => {
    if (updateCourse(formData, courseId)) {
      navigate(pageUrls.coursePage(courseId));
    } else {
      // should deal with the failure properly later
      navigate(pageUrls.coursePage(courseId));
    }
  }

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Update Course Information</h2>
      <form>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-600">
            Type
          </label>
          <select
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">

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
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-600">
            Status
          </label>
          <select
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
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
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price 
            <span className='font-black'> ₸</span>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="createdDate" className="block text-sm font-medium text-gray-600">
            Created Date
          </label>
          <input
            disabled // createdDate shouldn't be changed
            type="text"
            id="createdDate"
            name="createdDate"
            value={new Date(formData.createdDate).toLocaleDateString()}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
          onClick={submitForm}
        >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourseForm;