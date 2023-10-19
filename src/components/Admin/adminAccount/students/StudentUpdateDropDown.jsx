import React from "react";
import { useState, useRef, useEffect } from "react";

const StudentUpdateDropDown = ({ user }) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdownOnOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdownOnOutsideClick);
    return () => {
      window.removeEventListener('click', closeDropdownOnOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="text-sm hover:text-gray-300 focus:outline-none focus:text-gray-300"
        >
          Actions
          <svg
            className={`ml-2 inline-block h-4 w-4 transition-transform transform ${
                isOpen ? 'rotate-0' : 'rotate-180'
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
              d={isOpen ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute z-50 mt-2 py-2 w-40 bg-white rounded-md shadow-lg">
          <button onClick={() => handleUpdate(user.userId)} className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100">
            Update
          </button>
          <button onClick={() => handleDelete(user.userId)} className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentUpdateDropDown;