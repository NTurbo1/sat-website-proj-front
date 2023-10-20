import React, { useState, useRef } from 'react';
import SatReadingSelfStudyIntro from './SatReadingSelfStudyIntro';
import SatReadingSelfStudyLinks from './SatReadingSelfStudyLinks';

const SatReadingSelfStudy = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
        SAT Reading Self Study Materials
      </h2>
      
      <SatReadingSelfStudyIntro />

      <SatReadingSelfStudyLinks />
    </div>
  );
};

export default SatReadingSelfStudy;