import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="text-white text-lg hover:text-gray-300 focus:outline-none focus:text-gray-300"
                >
                    Courses
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
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-2">
                        <Link
                            href="/introduction-to-sat"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Introduction to the SAT
                        </Link>
                        <Link
                            href="/sat-math"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            SAT Math
                        </Link>
                        <Link
                            href="/sat-reading"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            SAT Reading
                        </Link>
                        <Link
                            href="/sat-writing"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            SAT Writing
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;