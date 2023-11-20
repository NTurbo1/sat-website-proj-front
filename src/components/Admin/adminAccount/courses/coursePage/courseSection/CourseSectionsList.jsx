import React, { useEffect, useState } from 'react'
import { retrieveAllCourseSectionsByCourseId } from '../../CRUD/CourseSectionCRUD';
import { Link, useNavigate } from 'react-router-dom';
import pageUrls from '../../../../../../utils/pageUrls';

const CourseSectionsList = ({ courseId }) => {

  const [courseSections, setCourseSections] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllCourseSectionsByCourseId = async (courseId) => {
      const retrievedCourseSections = await retrieveAllCourseSectionsByCourseId(courseId);
      setCourseSections(retrievedCourseSections);
    };

    fetchAllCourseSectionsByCourseId(courseId);
  }, []);

  return (
    <div className="my-8 flex flex-col items-center">
      <h1 className='text-2xl font-bold'>Course sections</h1>

      <ul className="space-y-4 w-3/5">
        {courseSections.map((courseSection) => (
          <li
            key={courseSection.id}
            className="bg-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <Link to={pageUrls.courseSectionPage(courseId, courseSection.id)}>
              <div className="mb-1">
                <h3 className="text-base font-medium">{courseSection.name}</h3>
              </div>
            </Link>

            <Link
              to={"#"}
              className="text-blue-500 hover:underline mr-2 text-sm"
            >
              Update
            </Link>

            <button
              onClick={() => {}}
              className="text-red-500 hover:underline text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <Link to={pageUrls.newCourseSectionForm(courseId)}
        className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-600"
      >
        Create New Section
      </Link>

      {/* <button
        onClick={() => navigate(pageUrls.newCourseSectionForm(courseId))}
        className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-600"
      >
        Create New Section
      </button> */}
    </div>
  );
};

export default CourseSectionsList;