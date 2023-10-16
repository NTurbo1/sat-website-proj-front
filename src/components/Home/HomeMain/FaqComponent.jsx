import React from 'react'
import FaQuestionsBox from './FaQuestionsBox'

const FaqComponent = () => {
  return (
    <div className='flex items-center flex-col'>
      <span className='pt-6 pb-6 text-2xl font-black'>
        FREQUENTLY ASKED QUESTIONS/FAQs
      </span>

      <FaQuestionsBox />
    </div>
  )
}

export default FaqComponent