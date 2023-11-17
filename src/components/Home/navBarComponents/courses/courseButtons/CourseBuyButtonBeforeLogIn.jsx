import React from 'react'
import pageUrls from '../../../../../utils/pageUrls';
import { useNavigate } from 'react-router-dom';

const CourseBuyButtonBeforeLogIn = () => {

  const navigate = useNavigate();

  return (
    <button 
      onClick={() => {
        navigate(pageUrls.login);
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Buy Now
    </button>
  )
}

export default CourseBuyButtonBeforeLogIn