import React, { useState } from 'react';

const FaQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border p-4 my-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}>
        <h3 className="text-lg font-bold">{question}</h3>
        {/* <div className="text-xl">{showAnswer ? '-' : '+'}</div> */}
        <svg
          className={`ml-2 inline-block h-4 w-4 transition-transform transform ${
              showAnswer ? 'rotate-0' : 'rotate-180'
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
              d={showAnswer ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
          />
      </svg>
      </div>
      {showAnswer && (
        <div className="mt-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaQuestion;
