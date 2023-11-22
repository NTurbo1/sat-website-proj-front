import React from "react";
import DefaultCourseImage from '/images/default_course_img.jpg';
import { Link } from "react-router-dom";
import pageUrls from "../../../../utils/pageUrls/pageUrls";

const StudentEnrolledCourseCard = ({ course }) => {

  return (
    <Link to={pageUrls.studentEnrolledCoursePage(course.id)}>
      <div className="w-64 bg-white rounded-lg shadow-lg p-2 m-4 max-w-sm">

        <img src={DefaultCourseImage} alt={course.name} 
          className="w-full h-40 object-cover rounded-lg mb-2" 
        />

        <h2 className="text-lg font-bold">{course.name}</h2>
        <div className="text-sm mb-2">{course.type}</div>
      </div>
    </Link>
  )
}

export default StudentEnrolledCourseCard;