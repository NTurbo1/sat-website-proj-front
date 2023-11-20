import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { retrieveCourseSectionByCourseIdAndCourseSectionId } from '../../CRUD/CourseSectionCRUD';

const CourseSectionPage = () => {

  const [courseSection, setCourseSection] = useState("");
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

  return (
    <div>Course section name: {courseSection.name} with id = {courseSection.id}</div>
  )
}

export default CourseSectionPage