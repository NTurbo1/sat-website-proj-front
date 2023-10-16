import React from 'react'
import FaQuestion from './FaQuestion'

const FaQuestionsBox = () => {
  return (
    <div className='container mx-auto my-4 max-w-3xl'>
      <FaQuestion
        question="What is Lorem Ipsum?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FaQuestion
        question="Why do we use it?"
        answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      <FaQuestion
        question="Where does it come from?"
        answer="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      />
    </div>
  )
}

export default FaQuestionsBox