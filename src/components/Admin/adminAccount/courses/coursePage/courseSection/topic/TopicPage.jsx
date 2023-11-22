import React, { useEffect, useState } from 'react'
import { retrieveTopic } from '../../../CRUD/TopicCRUD';
import { useParams } from 'react-router-dom';
import TopicDescription from './TopicDescription';

const TopicPage = () => {

  const { courseId, courseSectionId, topicId } = useParams();
  const [topic, setTopic] = useState({});

  useEffect(() => {
    const fetchTopic = async (courseId, courseSectionId, topicId) => {
      const retrievedTopic = await retrieveTopic(
        courseId, courseSectionId, topicId);
      setTopic(retrievedTopic);
    }

    fetchTopic(courseId, courseSectionId, topicId);
  }, []);

  return (
    <div className="w-4/5">
      <div className="max-h-fit rounded-lg shadow-md my-4 ml-2 mr-4 p-4">

        <h2 className="text-2xl font-bold mb-4 text-center">{topic.name}</h2>

        <TopicDescription topic={topic} />

        <div>
          {topic.text}
          
        </div>
      </div>
    </div>
  )
}

export default TopicPage