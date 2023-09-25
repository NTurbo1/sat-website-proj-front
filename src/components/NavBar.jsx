import React from "react";
import DropdownMenu from "./DropDownMenu"
import { Link } from "react-router-dom";

const NavBar = ({ titleText, logoImg }) => {

    return (
        <div className="bg-red-700">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-28">
                <div className="flex items-center">
                    {logoImg !== null && (
                    <div className="mr-4">{logoImg}</div>
                    )}
                    <span className="text-4xl text-white font-bold">{titleText}</span>
                </div>
        
                <div className="space-x-6">
                    <Link to="/login" className="text-white text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white">
                        Sign in
                    </Link>
                    <Link to="/register" className="text-white text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white">
                        Sign up
                    </Link>
                    <Link to="/services" className="text-white text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white">
                        Services
                    </Link>
                    <Link to="/contacts" className="text-white text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white">
                        Contacts
                    </Link>
                    <Link to="/about" className="text-white text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white">
                        About
                    </Link>
                    
                    <DropdownMenu />
                </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar