import React, { useState } from 'react'

const StudentTopicDescription = ({ topic }) => {

  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="border p-4 my-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowDescription(!showDescription)}>
        <h3 className="text-lg font-bold">Description</h3>
        <svg
          className={`ml-2 inline-block h-4 w-4 transition-transform transform ${
              showDescription ? 'rotate-0' : 'rotate-180'
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
              d={showDescription ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
          />
      </svg>
      </div>
      {showDescription && (
        <div className="mt-4">
          <p>{topic.description}</p>
        </div>
      )}
    </div>
  );
}

export default StudentTopicDescription