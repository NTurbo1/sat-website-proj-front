import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../../../utils/pageUrls/pageUrls';
import { StudentCourseSectionContext } from '../StudentCourseSectionPage';

const StudentTopicsSideBar = () => {

  const { topics, setTopics } = useContext(StudentCourseSectionContext);
  const { courseId, courseSectionId } = useParams();

  const navigate = useNavigate();

  return (
    <div className="w-1/5">
      <div className='bg-white p-4 my-4 ml-4 mr-2 rounded-lg shadow-md'>
        <Link
          to={pageUrls.studentCourseSectionPage(courseId, courseSectionId)}
          className="hover:underline"
        >
          Course section description
        </Link>
        {/* <h2 className="text-lg font-semibold mb-4">Topics</h2> */}
        <ul>
          {topics.map((topic) => (
            <li key={topic.id} className="mb-2 flex flex-col">
              <Link
                to={pageUrls.studentTopicPage(courseId, courseSectionId, topic.id)}
                className="hover:underline"
              >
                {topic.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentTopicsSideBar;