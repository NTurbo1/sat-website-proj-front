import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pageUrls from '../../../../../../../utils/pageUrls';
import { retrieveTopic, updateTopic } from '../../../CRUD/TopicCRUD';


const UpdateTopicForm = () => {
  
  const [updatedTopic, setUpdatedTopic] = useState(
    {
      name: "",
      description: "",
      text: ""
    }
  );

  const { courseId, courseSectionId, topicId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopicByCourseIdCourseSectionIdAndTopicId = async (
      courseId, courseSectionId, topicId
    ) => {
      const retrievedTopic = await retrieveTopic(courseId, 
        courseSectionId, topicId);

      setUpdatedTopic({
        name: retrievedTopic.name,
        description: retrievedTopic.description,
        text: retrievedTopic.text
      });
    }

    fetchTopicByCourseIdCourseSectionIdAndTopicId(
      courseId, courseSectionId, topicId);
  }, []);

  const handleUpdateTopic = async () => {
    const isUpdated = await updateTopic(courseId, courseSectionId, 
      topicId, updatedTopic);

    if (isUpdated) {
      navigate(pageUrls.topicPageAdmin(courseId, courseSectionId, topicId));
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-4/5 bg-gray-100">
      <div className="bg-white p-8 m-10 rounded shadow-lg w-10/12">

        <h2 className="text-2xl font-bold mb-4 text-center">Update New Topic</h2>
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
              value={updatedTopic.name}
              onChange={(event) =>
                setUpdatedTopic({...updatedTopic, name: event.target.value})
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
              value={updatedTopic.description}
              onChange={(event) => {
                setUpdatedTopic({...updatedTopic, description: event.target.value});
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
              value={updatedTopic.text}
              onChange={(event) => {
                setUpdatedTopic({...updatedTopic, text: event.target.value});
              }}
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleUpdateTopic}
            >
              Update topic
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default UpdateTopicForm