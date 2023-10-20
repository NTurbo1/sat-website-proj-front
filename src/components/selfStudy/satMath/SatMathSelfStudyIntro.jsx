import React, { useRef } from 'react'

const SatMathSelfStudyIntro = () => {

  const videoRef = useRef(null);

  return (
    <div className='flex flex-col items-center'>
      <div className="bg-white p-4 rounded shadow-lg max-w-fit">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">
          Introduction
        </h2>
        
        <div className="flex items-center justify-center">
          <div>
            <video
              ref={videoRef}
              controls
              width="700"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
          </div>
        </div>

        <div className='mt-8'>
          Intro info about SAT MATH
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio labore error perspiciatis ipsum enim, nihil dolores earum nesciunt odio. Nesciunt dignissimos harum, officiis unde, ab, numquam molestias voluptatem dolore consectetur sed nihil. Magnam earum sunt beatae nulla laudantium, nesciunt fuga tempora enim, atque odit, dicta blanditiis assumenda. Est deleniti, earum cum nulla omnis deserunt facere nemo, et odit assumenda totam vitae labore repudiandae nisi rem laudantium fuga amet corporis numquam unde quo odio? Consequatur temporibus earum voluptatem, similique molestiae sequi eius veritatis. Nostrum at accusamus id maiores culpa debitis non. Veniam similique totam id explicabo possimus eligendi voluptate rerum nisi!
        </div>
      </div>
    </div>
  )
}

export default SatMathSelfStudyIntro