import React from 'react';
import { courseStatus } from './CRUD/CourseConstants';
import { Link } from 'react-router-dom';
import pageUrls from '../../../../utils/pageUrls/pageUrls';

const CourseCard = ({ course }) => {

  let statusColor;
  if (course.status === courseStatus.active) {
    statusColor = 'bg-green-500';
  } else if (course.status === courseStatus.inactive) {
    statusColor = 'bg-red-500';
  } else { // for courseStatus.paused
    statusColor = 'bg-gray-500';
  }

  return (
    <Link to={pageUrls.coursePageAdmin(course.id)}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-72">
        {/* <img className="w-full" src={course.image} alt={course.name} /> */}
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">{course.name}</div>
          {/* <p className="text-gray-700 text-base mb-2">{course.description}</p> */}
          <div className="flex flex-col">
            <div className="text-gray-600 text-base">{course.type}</div>
            <div
              className={`text-white text-xs font-bold px-1 py-0.5 rounded ${statusColor} min-w-max w-0`}
            >
              {course.status}
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {course.price} <span className='text-sm font-bold font-mono'>₸</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;