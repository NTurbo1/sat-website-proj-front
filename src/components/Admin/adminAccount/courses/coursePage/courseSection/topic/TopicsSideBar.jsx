import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTopic, retrieveAllTopicsByCourseIdAndCourseSectionId } from '../../../CRUD/TopicCRUD';
import { Link } from 'react-router-dom';
import pageUrls from '../../../../../../../utils/pageUrls/pageUrls';
import { CourseSectionContext } from '../CourseSectionPage';

const TopicsSideBar = () => {

  const { topics, setTopics } = useContext(CourseSectionContext);
  const { courseId, courseSectionId } = useParams();

  const navigate = useNavigate();

  const handleDeleteTopic = async (topic) => {
    const isDeleted = await deleteTopic(courseId, courseSectionId, topic.id);

    if (isDeleted) {
      setTopics(topics => {
        return topics.filter(t => t.id !== topic.id);
      });

      navigate(pageUrls.courseSectionPageAdmin(courseId, courseSectionId));
    } else {
      // properly deal with the failure later
      alert("There was an error deleting topic with id = " + topic.id);
    }
  }

  return (
    <div className="w-1/5">
      <div className='bg-white p-4 my-4 ml-4 mr-2 rounded-lg shadow-md'>
        <Link
          to={pageUrls.courseSectionPageAdmin(courseId, courseSectionId)}
          className="hover:underline"
        >
          Course section description
        </Link>
        {/* <h2 className="text-lg font-semibold mb-4">Topics</h2> */}
        <ul>
          {topics.map((topic) => (
            <li key={topic.id} className="mb-2 flex flex-col">
              <Link
                to={pageUrls.topicPageAdmin(courseId, courseSectionId, topic.id)}
                className="hover:underline"
              >
                {topic.name}
              </Link>

              <div className='flex justify-end'>
                <Link
                  to={pageUrls.updateTopicForm(courseId, courseSectionId, topic.id)}
                  className="text-blue-500 hover:underline mr-2 text-sm"
                >
                  Update
                </Link>

                <button
                  onClick={() => {handleDeleteTopic(topic)}}
                  className="text-red-500 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <Link to={pageUrls.newTopicForm(courseId, courseSectionId)}
          className="bg-green-500 text-white py-1 px-2 text-sm rounded-md mt-4 hover:bg-green-600"
        >
          Create topic
        </Link>
      </div>
    </div>
  );
};

export default TopicsSideBar;