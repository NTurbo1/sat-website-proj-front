import React, {useContext} from 'react'
import { AuthContext } from '../../appContext/authContext'
import { Link } from 'react-router-dom'
import pageUrls from '../../../utils/pageUrls/pageUrls'
import DropdownMenu from './DropdownMenu'

const NavLinks = () => {

  const { isLoggedIn, setLoggedIn } = useContext(AuthContext)

  const navLinkClassName = 'text-white text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white'

  return (
    <div className="flex gap-4 w-1/3 flex-wrap justify-center">

      <Link to={pageUrls.home} className={navLinkClassName}>
          Home
      </Link>

      {!isLoggedIn &&
        <>
          <Link to={pageUrls.login} className={navLinkClassName}>
              Sign in
          </Link>
          <Link to={pageUrls.register} className={navLinkClassName}>
              Sign up
          </Link> 
        </>
      }

      <Link to={pageUrls.services} className={navLinkClassName}>
          Services
      </Link>
      <Link to={pageUrls.contacts} className={navLinkClassName}>
          Contacts
      </Link>
      <Link to={pageUrls.about} className={navLinkClassName}>
          About me
      </Link>
      <Link to={pageUrls.availableCourses} className={navLinkClassName}>
        Courses
      </Link>
      
      <DropdownMenu />
    </div>
  )
}

export default NavLinks