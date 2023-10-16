import React from 'react';
import ShortSatQuizImage from '/images/short-sat-quiz-image.jpg'

const ShortSATQuizBox = () => {

  return (
    <div className="border p-4 my-4 flex flex-col items-center bg-gray-200">
      <span className='text-pink-500 text-2xl'>
        Check your level for <span className='font-black'>FREE!!!</span>
      </span>
      
      <div className="w-16 h-1 bg-gray-800 my-4"></div> 

      <div className='flex gap-16 items-center'>
        <div className='max-w-2xl'>
          Short quiz explanation 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, explicabo voluptate esse nihil impedit minus corporis pariatur dolorum nostrum omnis! Est vel quas impedit distinctio delectus dicta saepe consectetur tempore blanditiis dolorem vitae, doloribus ea doloremque repudiandae architecto, dolore obcaecati ad asperiores facilis tenetur explicabo rem placeat culpa! Sed harum officiis iste maiores quos doloremque est ut id rem praesentium ducimus non impedit natus accusamus, exercitationem magni laborum repellendus aperiam deleniti officia suscipit culpa dolorem neque! Quos commodi suscipit nihil provident voluptates aliquam sapiente facilis sit doloribus? Unde repellendus perferendis mollitia beatae, ad libero facilis a odit accusamus ea suscipit?
        </div>
        <img 
          src={ShortSatQuizImage} alt='short sat quiz'
          className='w-80 h-56' 
        />
      </div>

      <div className='flex pt-12 justify-around gap-8'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          General English Test
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
          IELTS Test
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Math Test
        </button>
      </div>
    </div>
  );
};

export default ShortSATQuizBox;