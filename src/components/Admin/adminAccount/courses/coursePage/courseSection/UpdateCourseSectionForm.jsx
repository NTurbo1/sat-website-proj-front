import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCourseSection, retrieveCourseSectionByCourseIdAndCourseSectionId } from '../../CRUD/CourseSectionCRUD';
import pageUrls from '../../../../../../utils/pageUrls';

const UpdateCourseSectionForm = () => {
  
  const [updatedCourseSection, setUpdatedCourseSection] = useState(
    {
      name: "",
      description: ""
    }
  );

  const { courseId, courseSectionId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseSectionByCourseIdAndCourseSectionId = 
      async (courseId, courseSectionId) => {
        const retrievedCourseSection = 
          await retrieveCourseSectionByCourseIdAndCourseSectionId(
            courseId, courseSectionId);

        setUpdatedCourseSection({
          name: retrievedCourseSection.name,
          description: retrievedCourseSection.description
        });
      };

    fetchCourseSectionByCourseIdAndCourseSectionId(courseId, courseSectionId);
  }, []);

  const handleUpdateCourseSection = async () => {
    const isUpdated = await updateCourseSection(
      courseId, courseSectionId, updatedCourseSection);

    if (isUpdated) {
      navigate(pageUrls.coursePageAdmin(courseId));
    } else {
      //handle properly later
      alert("There was an error updating course section.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100">
      <div className="bg-white p-8 m-10 rounded shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-4 text-center">Update Course Section</h2>
        <form>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="new-course-section-name">
              Course section Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="new-course-section-name"
              type="text"
              placeholder="Enter course section name"
              value={updatedCourseSection.name}
              onChange={(event) =>
                setUpdatedCourseSection({...updatedCourseSection, name: event.target.value})
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="new-course-section-description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="new-course-section-description"
              rows="3"
              placeholder="Enter course section description"
              value={updatedCourseSection.description}
              onChange={(event) => {
                setUpdatedCourseSection({...updatedCourseSection, description: event.target.value});
              }}
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleUpdateCourseSection}
            >
              Update course section
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default UpdateCourseSectionForm