import React from 'react'

const IntroToSAT = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-semibold text-gray-800">Introduction to SAT</h1>
            <p className="mt-2 text-sm text-gray-500">
              The SAT (Scholastic Assessment Test) is a standardized test commonly used for college admissions in the United States.
              It plays a significant role in assessing a student's readiness for college and is widely accepted by colleges and universities across the country.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Test Structure</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  The SAT consists of three main sections:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Mathematics</li>
                    <li>Evidence-Based Reading and Writing (EBRW)</li>
                    <li>Essay (optional)</li>
                  </ul>
                  Each section assesses different skills and knowledge areas.
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Scoring</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  The SAT is scored on a scale of 400 to 1600, combining test results from two 200-800 point subject areas: Mathematics and Evidence-Based Reading and Writing (EBRW).
                  The optional Essay is scored separately. Scores can be a crucial factor in college admissions.
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Test Dates</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  The SAT is offered several times a year. You can find the test dates and registration deadlines on the official College Board website.
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Preparation</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Preparing for the SAT is essential for success. You can use SAT prep materials, take practice tests, and consider SAT prep courses or tutors.
                  Many online resources are available to help you excel in the exam.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroToSAT