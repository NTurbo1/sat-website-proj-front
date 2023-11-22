import React, { useContext } from 'react'
import { StudentCourseSectionContext } from './StudentCourseSectionPage';

const StudentCourseSectionDescription = () => {

  const { courseSection } = useContext(StudentCourseSectionContext);

  return (
    <div className='w-4/5'>
      <div className='max-h-fit rounded-lg shadow-md my-4 ml-2 mr-4 p-4'>
      {courseSection.description}
      </div>
    </div>
  )
}

export default StudentCourseSectionDescription