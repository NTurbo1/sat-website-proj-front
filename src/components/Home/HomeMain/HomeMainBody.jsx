import React from 'react'
import HomeWelcome from './HomeWelcome';
import FaqComponent from './FaqComponent';
import ShortSATQuizBox from './ShortSATQuizBox';
import TutorPortfolioBox from './TutorPortfolioBox';

const HomeMainBody = () => {

  return (
    <div className='grow'>
      <HomeWelcome />
      <FaqComponent />
      <ShortSATQuizBox />
      <TutorPortfolioBox tutorName={"Torin ThrineSon"}/>
    </div>
  );
}

export default HomeMainBody