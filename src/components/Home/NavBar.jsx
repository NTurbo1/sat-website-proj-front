import React, { useContext } from "react";
import { AuthContext } from "../appContext/authContext";
import NavLinks from "./navBarComponents/NavLinks";
import SocialMediaLinks from "./navBarComponents/SocialMediaLinks";
import ProfileDropDown from './navBarComponents/ProfileDropDown';

const NavBar = ({ titleText, logoImg }) => {

  const { isLoggedIn, setLoggedIn } = useContext(AuthContext)

  return (
    <div className="bg-gray-800 grow-0">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
              {logoImg !== null && (
                  <div className="mr-4">{logoImg}</div>
              )}
              <span className="text-2xl text-white font-bold">{titleText}</span>
          </div>

          <NavLinks />

          { isLoggedIn &&
            <ProfileDropDown />
          }

          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
};

export default NavBar