import React, { useContext } from 'react'
import { CourseSectionContext } from './CourseSectionPage'

const CourseSectionDescription = () => {

  const { courseSection } = useContext(CourseSectionContext);

  return (
    <div className='w-4/5'>
      <div className='max-h-fit rounded-lg shadow-md my-4 ml-2 mr-4 p-4'>
      {courseSection.description}
      </div>
    </div>
  )
}

export default CourseSectionDescription