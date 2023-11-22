import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createTopic } from '../../../CRUD/TopicCRUD';
import pageUrls from '../../../../../../../utils/pageUrls/pageUrls';
import { CourseSectionContext } from '../CourseSectionPage';

const NewTopicForm = () => {

  const { topics, setTopics } = useContext(CourseSectionContext);
  
  const [newTopic, setNewTopic] = useState(
    {
      name: "",
      description: "",
      text: ""
    }
  );

  const { courseId, courseSectionId } = useParams();

  const navigate = useNavigate();

  const handleCreateTopic = async () => {
    const createdTopic = await createTopic(courseId, courseSectionId, newTopic);

    if (createdTopic) {
      setTopics(topics => [...topics, createdTopic]);

      navigate(pageUrls.courseSectionPageAdmin(courseId, courseSectionId));
    } else {
      alert("There was an error creating new topic.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-4/5 bg-gray-100">
      <div className="bg-white p-8 m-10 rounded shadow-lg w-10/12">

        <h2 className="text-2xl font-bold mb-4 text-center">Create New Topic</h2>
        <form>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="new-topic-name">
              Topic Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="new-topic-name"
              type="text"
              placeholder="Enter topic name"
              value={newTopic.name}
              onChange={(event) =>
                setNewTopic({...newTopic, name: event.target.value})
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="new-topic-description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full h-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="new-topic-description"
              rows="3"
              placeholder="Enter topic description"
              value={newTopic.description}
              onChange={(event) => {
                setNewTopic({...newTopic, description: event.target.value});
              }}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="new-topic-text">
              Text
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full h-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="new-topic-text"
              rows="3"
              placeholder="Enter topic text"
              value={newTopic.text}
              onChange={(event) => {
                setNewTopic({...newTopic, text: event.target.value});
              }}
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCreateTopic}
            >
              Create topic
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default NewTopicForm