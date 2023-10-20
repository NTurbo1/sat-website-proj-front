import React from "react";
import { useState, useRef, useEffect } from "react";
import { handleDelete } from "./StudentCRUD";
import { useAuth } from "../../../auth/authentication/AuthProvider";
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

  // const updateClick = (user) => {
  //   // handleUpdate(user);

  //   setUpdateModalOpen(true);
  // };

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
          className="text-sm hover:text-gray-300 focus:outline-none focus:text-gray-300"
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
          {/* <button onClick={() => updateClick(user)} className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100">
            Update
          </button> */}
          <button onClick={() => deleteClick(user.userId)} className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100">
            Delete
          </button>
        </div>
      )}

      {/* <ReactModal
        isOpen = {isUpdateModalOpen}
        onRequestClose={() => setUpdateModalOpen(false)}
        className='w-96 h-96 bg-white rounded-xl p-5 flex flex-col items-center'
        // parentSelector={() => document.getElementById('students-div')}
      >
        <button
          onClick={() => setUpdateModalOpen(false)}
          className='model-close-btn grow-0'
        >
          X
        </button>

        {updateModalContent}
      </ReactModal> */}
    </div>
  );
};

export default StudentUpdateDropDown;