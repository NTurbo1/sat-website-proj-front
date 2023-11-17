import React, { useContext, useEffect, useState } from 'react'
import { AvailableCoursesContext } from '../../../../appContext/availableCoursesContext'
import { useParams } from 'react-router-dom';

const AvailableCourse = () => {
  const [availableCourse, setAvailableCourse] = useState({});
  const { courses, studentCourses } = useContext(AvailableCoursesContext);
  const { courseId } = useParams();

  useEffect(() => {
    const course = courses.find(course => course.id == courseId);

    if (course) {
      setAvailableCourse(course);
    }
  }, [courses, courseId]);

  const description = availableCourse ? availableCourse.description : '';

  return (
    <div>{description}</div>
  );
}

export default AvailableCourse;