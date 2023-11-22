import React, { useState, useEffect, createContext } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { retrieveCourseSectionByCourseIdAndCourseSectionId } from '../../../../../Admin/adminAccount/courses/CRUD/CourseSectionCRUD';
import StudentTopicsSideBar from './topic/StudentTopicsSideBar';
import { retrieveAllTopicsByCourseIdAndCourseSectionId } from '../../../../../Admin/adminAccount/courses/CRUD/TopicCRUD';

export const StudentCourseSectionContext = createContext({});

const StudentCourseSectionPage = () => {

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
    <StudentCourseSectionContext.Provider value={{ 
      courseSection, setCourseSection, topics, setTopics 
    }}>
      <div className='flex min-h-screen w-screen bg-gray-100'>
        <StudentTopicsSideBar />

        <Outlet />
      </div>
    </StudentCourseSectionContext.Provider>
  )
}

export default StudentCourseSectionPage