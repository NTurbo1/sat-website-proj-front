import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../auth/AuthProvider';
import pageUrls from '../../../../../utils/pageUrls/pageUrls';

const StudentAccountTopNavLinks = () => {

  const { handleLogOut } = useAuth();

  const navLinkClassName = 'text-white text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white';

  return (
    <div className="flex gap-4 flex-wrap items-center">
      <Link to={pageUrls.studentDashboard} className={navLinkClassName}>
        Dashboard
      </Link>
      <Link to={pageUrls.studentProfile} className={navLinkClassName}>
        Profile
      </Link>
      <Link to={pageUrls.studentEnrolledCourses} className={navLinkClassName}>
        Enrolled courses
      </Link>
      <Link to={pageUrls.studentMockTests} className={navLinkClassName}>
        Mock tests
      </Link>

      <Link to={pageUrls.home} className={navLinkClassName}>
        Home
      </Link>

      <button 
        onClick={handleLogOut}
        className="px-5 py-2 hover:bg-gray-700 cursor-pointer text-red-400 text-sm"
      >
        Log out
      </button>
    </div>
  )
}

export default StudentAccountTopNavLinks