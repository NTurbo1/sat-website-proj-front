import React from "react";

const ServicesPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
          <div className="max-w-screen-xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6">SAT Tutoring Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3">1-on-1 Tutoring</h2>
              <p className="text-gray-700">
                  Personalized, 1-on-1 SAT tutoring tailored to your specific needs and goals.
              </p>
              </div>
              <div className="bg-white rounded p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3">Group Sessions</h2>
              <p className="text-gray-700">
                  Collaborative SAT prep sessions with small groups of students for interactive learning.
              </p>
              </div>
              <div className="bg-white rounded p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3">Practice Tests</h2>
              <p className="text-gray-700">
                  Access to a library of SAT practice tests to track progress and improve test-taking skills.
              </p>
              </div>
          </div>
          </div>
        </div>
    );
};
  
export default ServicesPage;