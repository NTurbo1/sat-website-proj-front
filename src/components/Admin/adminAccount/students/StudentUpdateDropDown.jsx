import React from "react";
import { useState, useRef, useEffect } from "react";
import { handleDelete } from "./StudentCRUD";
import { useAuth } from "../../../auth/AuthProvider";
import { handleRetrieveAllStudents } from "./StudentCRUD";

const StudentUpdateDropDown = ({ user, setStudents }) => {

  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { handleLogOut } = useAuth();

  const toggleDropdown = () => {
    setIsActionsOpen(!isActionsOpen);
  };

  const closeDropdownOnOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActionsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdownOnOutsideClick);
    return () => {
      window.removeEventListener('click', closeDropdownOnOutsideClick);
    };
  }, []);

  const deleteClick = async (userId) => {
    const isDeleted = await handleDelete(userId);
    if (isDeleted) {
      const studentsList = await handleRetrieveAllStudents(handleLogOut);
      setStudents(studentsList);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="text-sm font-medium text-gray-700 bg-gray-300 rounded-md px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          Actions
          <svg
            className={`ml-2 inline-block h-4 w-4 transition-transform transform ${
                isActionsOpen ? 'rotate-0' : 'rotate-180'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isActionsOpen ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
            />
          </svg>
        </button>
      </div>
      {isActionsOpen && (
        <div className="absolute z-50 mt-2 py-2 w-40 bg-white rounded-md shadow-lg">
          <button onClick={() => deleteClick(user.userId)} 
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentUpdateDropDown;