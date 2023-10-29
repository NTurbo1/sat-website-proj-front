import React from 'react'

const MockTests = () => {
  
  const mockTests = [
    {
      name: 'College Board SAT Practice Tests',
      link: 'https://collegereadiness.collegeboard.org/sat/practice/full-length-practice-tests',
    },
    {
      name: 'Khan Academy SAT Practice Tests',
      link: 'https://www.khanacademy.org/test-prep/sat/full-length-sat-1',
    },
    {
      name: 'Princeton Review SAT Practice Tests',
      link: 'https://www.princetonreview.com/college/sat-practice-tests',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Mock SAT Tests</h2>
        <div className="space-y-4">
          {mockTests.map((test, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{test.name}</h3>
              <a
                href={test.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Go to Test
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MockTests