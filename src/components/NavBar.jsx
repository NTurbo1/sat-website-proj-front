import React, { useContext } from "react";
import DropdownMenu from "./navBarComponents/DropdownMenu"
import { Link } from "react-router-dom";
import { StateContext } from "../App";
import ProfileDropDown from "./navBarComponents/ProfileDropDown";

const NavBar = ({ titleText, logoImg }) => {

  const { loginState } = useContext(StateContext)
  const [isLoggedIn, setLoggedIn] = loginState

  // localStorage.removeItem("jwtToken")
  // const isLoggedIn = localStorage.getItem("jwtToken") != null

  const navLinkClassName = 'text-white text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white'

  return (
    <div className="bg-red-700 grow-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
        <div className="flex items-center">
            {logoImg !== null && (
                <div className="mr-4">{logoImg}</div>
            )}
            <span className="text-2xl text-white font-bold">{titleText}</span>
        </div>

        <div className="space-x-6">

          <Link to="/" className={navLinkClassName}>
              Home
          </Link>

          {!isLoggedIn &&
            <>
              <Link to="/login" className={navLinkClassName}>
                  Sign in
              </Link>
              <Link to="/register" className={navLinkClassName}>
                  Sign up
              </Link> 
            </>
          }

          <Link to="/services" className={navLinkClassName}>
              Services
          </Link>
          <Link to="/contacts" className={navLinkClassName}>
              Contacts
          </Link>
          <Link to="/about" className={navLinkClassName}>
              About
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