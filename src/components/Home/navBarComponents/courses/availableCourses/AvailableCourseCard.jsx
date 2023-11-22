import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import CourseBuyButtonAfterLogIn from "../courseButtons/CourseBuyButtonAfterLogIn";
import CourseBuyButtonBeforeLogIn from "../courseButtons/CourseBuyButtonBeforeLogIn";
import CourseEnrolledButton from "../courseButtons/CourseEnrolledButton";

import defaultCourseImage from "/images/default_course_img.jpg";
import pageUrls from "../../../../../utils/pageUrls/pageUrls";

const AvailableCourseCard = ({ course, studentCourses }) => {

  // const [isEnrolled, setEnrolled] = useState(false);

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  let courseButton = <CourseBuyButtonBeforeLogIn />

  if (isLoggedIn) {
    if (studentCourses
        .filter(studentCourse => studentCourse.id === course.id)
        .length === 0) {
      courseButton = <CourseBuyButtonAfterLogIn course={course} />
    } else {
      courseButton = <CourseEnrolledButton />
    }
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm">
      <a href={pageUrls.availableCourses + "/" + course.id}>
        <img src={defaultCourseImage} alt={course.name} className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-bold mb-2">{course.name}</h3>
      </a>

      <div className="flex justify-between items-center">
        {
          studentCourses
            .filter(studentCourse => studentCourse.id === course.id)
            .length === 0 
            &&
          <span className="text-gray-900 text-lg font-bold">
            {course.price} <span className='text-normal font-bold font-mono'>₸</span>
          </span>
        }

        {courseButton}
      </div>
    </div>
  );
};

export default AvailableCourseCard;