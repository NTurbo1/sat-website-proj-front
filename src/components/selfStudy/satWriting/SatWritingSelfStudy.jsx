import React, { useState, useRef } from 'react';
import SatWritingSelfStudyIntro from './SatWritingSelfStudyIntro';
import SatWritingSelfStudyLinks from './SatWritingSelfStudyLinks';

const SatWritingSelfStudy = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
        SAT Writing Self Study Materials
      </h2>
      
      <SatWritingSelfStudyIntro />

      <SatWritingSelfStudyLinks />
    </div>
  );
};

export default SatWritingSelfStudy;