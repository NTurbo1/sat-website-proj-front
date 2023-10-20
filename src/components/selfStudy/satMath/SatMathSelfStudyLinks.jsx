import React from 'react';

const SatMathSelfStudyLinks = () => {
  const links = [
    {
      title: 'Khan Academy SAT Math',
      description: 'Comprehensive SAT Math resources and practice exercises.',
      url: 'https://www.khanacademy.org/test-prep/sat',
    },
    {
      title: 'College Board Official SAT Practice',
      description: 'Practice questions and full-length practice tests for SAT Math.',
      url: 'https://collegereadiness.collegeboard.org/sat/practice',
    },
    {
      title: 'Varsity Tutors SAT Math Practice Tests',
      description: 'Free SAT Math practice tests with detailed solutions and explanations.',
      url: 'https://www.varsitytutors.com/sat_math-practice-tests',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Useful Links for SAT Math Self Study
        </h2>
        <div className="space-y-4">
          {links.map((link, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{link.title}</h3>
              <p className="text-gray-600 mb-4">{link.description}</p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Go to Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SatMathSelfStudyLinks;
