import React from 'react';
import { Link } from 'react-router-dom';
import pageUrls from '../../../../utils/pageUrls';
import { useAuth } from '../../../auth/AuthProvider';

const AdminAccountTopNavLinks = () => {

  const { handleLogOut } = useAuth();

  const navLinkClassName = 'text-white text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white';

  return (
    <div className="flex gap-4 flex-wrap items-center">
      <Link to={pageUrls.adminDashboard} className={navLinkClassName}>
        Dashboard
      </Link>
      <Link to={pageUrls.adminProfile} className={navLinkClassName}>
        Profile
      </Link>
      <Link to={pageUrls.courses} className={navLinkClassName}>
        Courses
      </Link>
      <Link to={pageUrls.allStudents} className={navLinkClassName}>
        All students
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

export default AdminAccountTopNavLinks