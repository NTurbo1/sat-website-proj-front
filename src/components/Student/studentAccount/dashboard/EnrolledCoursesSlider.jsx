import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DefaultCourseImage from '/images/default_course_img.jpg';
import pageUrls from "../../../../utils/pageUrls";

const EnrolledCoursesSlider = () => {
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

  const courses = [
    {
      name: "Course 1",
      image: DefaultCourseImage,
      link: "/course-1",
    },
    {
      name: "Course 2",
      image: DefaultCourseImage,
      link: "/course-2",
    },
    {
      name: "Course 3",
      image: DefaultCourseImage,
      link: "/course-3",
    },
    {
      name: "Course 4",
      image: DefaultCourseImage,
      link: "/course-4",
    },
    {
      name: "Course 5",
      image: DefaultCourseImage,
      link: "/course-5",
    },
    {
      name: "Course 6",
      image: DefaultCourseImage,
      link: "/course-6",
    },
    // Add more courses here
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
      <Carousel 
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {/* {courses.map((course, index) => {
          return (
            <div key={index} className="max-w-full sm:w-72 md:w-80 lg:w-96 px-5">
              <div className="bg-gray-200 rounded-lg shadow-md p-4">
                <a href={course.link}>
                  <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-bold mb-2">{course.name}</h3>
                </a>
              </div>

              {index === courses.length - 1 && (
              <a
                href="/enrolled-courses"
                className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold transition-opacity opacity-0 group-hover:opacity-100"
              >
                View All Enrolled Courses
              </a>
            )}
          </div>
          )
        })} */}

{courses.map((course, index) => (
          <div key={index} className={`max-w-full sm:w-72 md:w-80 lg:w-96 px-2 ${index === courses.length - 1 ? 'group' : ''}`}>
            <div className={`bg-gray-200 rounded-lg shadow-md p-4 ${index === courses.length - 1 ? 'relative' : ''}`}>
              <a href={course.link}>
                <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold mb-2">{course.name}</h3>
              </a>
              {index === courses.length - 1 && (
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



