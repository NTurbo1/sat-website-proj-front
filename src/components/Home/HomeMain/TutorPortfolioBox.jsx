import React from 'react';
import DefaultAvatarImage from '/images/default-avatar-image.png';
import { Link, Navigate } from 'react-router-dom';
import pageUrls from '../../../utils/pageUrls/pageUrls';

const TutorPortfolioBox = ({tutorName}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 my-4 px-32">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Why {tutorName}??? Just why??? ... Why?
      </h2>

      <div className="flex items-center mb-6 gap-16">

        <div className='flex flex-col items-center gap-4 min-w-max'>
          <img
            className="w-64 h-64 rounded-full mr-4"
            src={DefaultAvatarImage}
            alt="Tutor Avatar"
          />
          <div>
            <p className="text-xl font-bold text-gray-900">Dr. {tutorName}</p>
            <p className="text-sm text-gray-700">Ph.D. in Physics</p>
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800 mb-4 leading-relaxed">
            With over 20 years of teaching experience and a background in academic research, Dr. {tutorName} brings a wealth of knowledge and expertise to his courses.
          </p>
          <ul className="text-gray-700 mb-4 list-disc list-inside">
            <li>Published 5 research papers</li>
            <li>Recipient of the Excellence in Teaching Award</li>
            <li>Passionate about fostering a deep understanding of complex concepts</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Enroll in Dr. {tutorName}'s courses to gain a comprehensive understanding of physics and unlock your true potential in the field.
          </p>
          <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
            to={pageUrls.availableCourses}
          >
            View Courses
          </Link>
        </div>

      </div>

    </div>
  );
};

export default TutorPortfolioBox;
