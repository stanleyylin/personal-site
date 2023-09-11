import React from 'react'
import './experiences.css';
import deco3 from '../res/deco-box3.png';
import moon from '../res/moon.png';
import Box from '../components/Box';

const Experiences = () => {
  const points1 = ["> Engineered responsive web app to allow business stakeholders to access and analyze critical sales, inventory, and customer data.", "> Designed and implemented frontend design using React.js, Typescript, and styled components.", "> Demonstrated teamwork skills by actively participating in cross-functional collaboration, leading to a 45% reduction in development cycle time and improved overall project efficiency."];
  const points2 = ["> Developing a cross-platform real-estate application for a real estate agent, providing optimized property searching and appointment booking for over 100+ clients.", "> Utilizing React, MongoDB, ExpressJS, NodeJS, Styled Components, and the Realtor.ca API to implement user-centric design principles and features and to seamlessly integrate real estate data."];
  const points3 = ["> Collaborated with a team of Stanford AI students led by Dr. Andrew Ng to create a cutting-edge, python computer science curriculum for high school students.", "> Led committee meetings and developed modules both in Google Colaboratory (Tensorflow) and in the web app.", "> Technologies used: Python, Tensorflow, Machine Learning."];
  const points4 = ["> Organized campus-wide events including club socials, BOT/EOT events, speaker events, games nights, and co-op panels with turnout rates of over 400+ students. ", "> Participated in team meetings, delegated tasks, and organized timelines.", "> Creating designs for posts @uwaterloodsc on instagram with over 2200+ followers."];
  return (
    <main className='experience-section'>
      <div className='experiences-title'>
        <img src={deco3} className='x' alt=''/>
        <div className='file-title'>
          <img src={moon} className='moon' alt=''/>
          <p className='experience-pdf'>EXPERIENCE.PDF</p>
        </div>
      </div>

      <div className='experiences-grid'>
        <Box title='bld.ai' info='Software Engineer Intern | May — August 2023' points={points1}/>
        <Box title='Homelife New World Realty Inc, Lisa Gao' info='Software Developer (Freelance) | July 2023 - Present' points={points2}/>
        <Box title='Student Advisory Council Member' info='Kira Learning | June - August 2021 & 2022' points={points3}/>
        <Box title='Logistics Coordinator, Graphic Designer' info='UWaterloo Data Science Club | DECEMBER—PRESENT 2023' points={points4}/>



      </div>
      
    </main>
  )
}

export default Experiences
