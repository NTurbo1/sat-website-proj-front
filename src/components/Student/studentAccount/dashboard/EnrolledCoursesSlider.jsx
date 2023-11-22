import React, { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DefaultCourseImage from '/images/default_course_img.jpg';
import pageUrls from "../../../../utils/pageUrls/pageUrls";
import { retrieveAllCoursesByStudentId } from "../../../Admin/adminAccount/courses/CRUD/CourseCRUD";

const EnrolledCoursesSlider = () => {

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchAllStudentCourses = async () => { // should retrieve the user enrolled courses
      const retrievedCourses = await retrieveAllCoursesByStudentId(
        localStorage.getItem("userId")
      );
      setEnrolledCourses(retrievedCourses);
    };

    fetchAllStudentCourses();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
      <Carousel 
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >

        {enrolledCourses.map((course, index) => (
          <div key={index} className={`max-w-full sm:w-72 md:w-80 lg:w-96 px-2 ${index === enrolledCourses.length - 1 ? 'group' : ''}`}>
            <div className={`bg-gray-200 rounded-lg shadow-md p-4 ${index === enrolledCourses.length - 1 ? 'relative' : ''}`}>
              <a href={course.link}>
                <img src={DefaultCourseImage} alt={course.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold mb-2">{course.name}</h3>
              </a>

              {index === enrolledCourses.length - 1 && (
                <div className="absolute inset-0 overflow-hidden">
                  <div className="h-full w-1/2 absolute right-0 top-0 bg-white opacity-70 shadow-lg">
                    <a
                      href={pageUrls.studentEnrolledCourses}
                      className="absolute inset-0 flex items-center justify-center text-blue-800 text-base font-bold hover:underline"
                    >
                      View all
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Carousel>

      <div className="mt-4 text-right">
        <a
          href={pageUrls.studentEnrolledCourses}
          className="text-indigo-600 font-bold hover:underline"
        >
          View all
        </a>
      </div>
    </div>
  );
};

export default EnrolledCoursesSlider;



