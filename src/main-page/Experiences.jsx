import React from 'react'
import './experiences.css';
import deco3 from '../res/deco-box3.png';
import moon from '../res/moon.png';
import Box from '../components/Box';

const Experiences = () => {
  const points1 = ["> Building and designing software and web applications with bld.ai in an Agile environment.", "> Developing sleek user interfaces to create engaging UI/UX designs for maple.direct, a startup in the e-commerce space.", "> Technologies used: HTML5/CSS, Javascript, React.JS, NextJS, Node.JS, Figma."];
  const points2 = ["> Collaborated with a team of Stanford AI students led by Dr. Andrew Ng to create a cutting-edge, python computer science curriculum for high school students.", "> Led committee meetings and developed modules both in Google Colaboratory (Tensorflow) and in the web app.", "> Technologies used: Python, Tensorflow, Machine Learning."];
  const points3 = ["> Organized campus-wide events including club socials, BOT/EOT events, speaker events, games nights, and co-op panels with turnout rates of over 400+ students. ", "> Participated in team meetings, delegated tasks, and organized timelines.", "> Creating designs for posts @uwaterloodsc on instagram with over 2200+ followers."];
  const points4 = ["> Developed a high-performing machine learning model that predicted hotel cancellations and provided actionable business insights using advanced data science techniques: hyperparameter tuning, cross-validation, decision trees, and boosting.", "> Achieved an outstanding accuracy of 90% through rigorous experimentation and data visualization.", "> Technologies used: Python, Tensorflow."];
  return (
    <main className='experience-section'>
      <div className='experiences-title'>
        <img src={deco3} className='x' />
        <div className='file-title'>
          <img src={moon} className='moon' />
          <p className='experience-pdf'>EXPERIENCE.PDF</p>
        </div>
      </div>

      <div className='experiences-grid'>
        <Box title='Software Engineer Intern (Spring 2023 Co-op)' info='maple.direct via bld.ai | MAY 2023 — PRESENT' points={points1}/>
        <Box title='Student Advisory Council Member' info='Kira Learning | June - August 2021 & 2022' points={points2}/>
        <Box title='Logistics Coordinator, Graphic Designer' info='UWaterloo Data Science Club | DECEMBER—PRESENT 2023' points={points3}/>
        <Box title='Hacker' info='DataQuest @ Western | MARCH 2023' points={points4}/>



      </div>
      
    </main>
  )
}

export default Experiences
