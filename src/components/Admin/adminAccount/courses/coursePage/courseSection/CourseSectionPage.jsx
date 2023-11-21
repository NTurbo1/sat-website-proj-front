import React, { useState, useEffect, createContext } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { retrieveCourseSectionByCourseIdAndCourseSectionId } from '../../CRUD/CourseSectionCRUD';
import TopicsSideBar from './topic/TopicsSideBar';
import { retrieveAllTopicsByCourseIdAndCourseSectionId } from '../../CRUD/TopicCRUD';

export const CourseSectionContext = createContext({});

const CourseSectionPage = () => {

  const [courseSection, setCourseSection] = useState({});
  const [topics, setTopics] = useState([]);

  const { courseId, courseSectionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseSectionByCourseIdAndCourseSectionId = async (courseId, courseSectionId) => {
      const retrievedCourseSection = 
        await retrieveCourseSectionByCourseIdAndCourseSectionId(
          courseId, courseSectionId);
      setCourseSection(retrievedCourseSection);
    };

    fetchCourseSectionByCourseIdAndCourseSectionId(courseId, courseSectionId);
  }, []);

  useEffect(() => {
    const fetchAllTopicsByCourseIdAndCourseSectionId = async (courseId, courseSectionId) => {
      const retrievedTopics = await retrieveAllTopicsByCourseIdAndCourseSectionId(
        courseId, courseSectionId
      );

      setTopics(retrievedTopics);
    }

    fetchAllTopicsByCourseIdAndCourseSectionId(courseId, courseSectionId);
  }, []);

  return (
    <CourseSectionContext.Provider value={{ 
      courseSection, setCourseSection, topics, setTopics 
    }}>
      <div className='flex min-h-screen w-screen bg-gray-100'>
        <TopicsSideBar />

        <Outlet />
      </div>
    </CourseSectionContext.Provider>
  )
}

export default CourseSectionPage