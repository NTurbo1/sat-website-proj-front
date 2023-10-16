import React, { useContext } from "react";
import DropdownMenu from './navBarComponents/DropdownMenu'
import { Link } from "react-router-dom";
import ProfileDropDown from "./navBarComponents/ProfileDropDown";
import pageUrls from "../../utils/pageUrls";
import { AuthContext } from "../appContext/authContext";

const NavBar = ({ titleText, logoImg }) => {

  const { isLoggedIn, setLoggedIn } = useContext(AuthContext)
  console.log('NavBar isLoggedIn: ' + isLoggedIn);
  console.log('NavBar setLoggedIn: ' + setLoggedIn);

  const navLinkClassName = 'text-white text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white'

  return (
    <div className="bg-gray-800 grow-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
        <div className="flex items-center">
            {logoImg !== null && (
                <div className="mr-4">{logoImg}</div>
            )}
            <span className="text-2xl text-white font-bold">{titleText}</span>
        </div>

        <div className="space-x-6">

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
          
          <DropdownMenu />

          { isLoggedIn &&
            <ProfileDropDown />
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar