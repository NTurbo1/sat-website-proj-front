import React from 'react'
import HomeMainBodyBgImage from '/images/young-friends-park.jpg'
import { Link } from 'react-router-dom'
import pageUrls from '../../../utils/pageUrls'

const HomeWelcome = () => {
  return (
    <div
      className="relative bg-cover bg-center py-40 text-white text-center"
      style={{
        backgroundImage: `url(${HomeMainBodyBgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold mb-4">Achieve SAT Success</h1>
        <p className="text-lg mb-8">
          Your pathway to SAT excellence starts here.
        </p>
        <Link
          to={pageUrls.availableCourses}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  )
}

export default HomeWelcome