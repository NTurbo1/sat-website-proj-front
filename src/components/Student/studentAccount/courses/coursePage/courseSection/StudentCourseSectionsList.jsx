import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import pageUrls from '../../../../../../utils/pageUrls/pageUrls';
import { retrieveAllCourseSectionsByCourseId } from '../../../../../Admin/adminAccount/courses/CRUD/CourseSectionCRUD';

const StudentCourseSectionsList = ({ courseId }) => {

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
            <Link to={pageUrls.studentCourseSectionPage(courseId, courseSection.id)}>
              <div className="mb-1">
                <h3 className="text-base font-medium">{courseSection.name}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentCourseSectionsList;