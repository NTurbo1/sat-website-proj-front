import React from 'react'

const CourseBox = ({course, index, courses}) => {

  const handlePriceChange = (index, newPrice) => {
    const updatedCourses = [...courses];
    updatedCourses[index].price = newPrice;
    setCourses(updatedCourses);
  };

  return (
    <div key={index} className="border border-gray-300 p-4 mb-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2">{course.name}</h3>
      <p className="mb-2">{course.info}</p>
      <p className="mb-2">Price: ${course.price}</p>
      <div className="flex items-center">
        <input
          type="number"
          value={course.price}
          onChange={(e) => handlePriceChange(index, e.target.value)}
          className="border border-gray-300 p-2 w-24 mr-2"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Change Price
        </button>
      </div>
    </div>
  )
}

export default CourseBox