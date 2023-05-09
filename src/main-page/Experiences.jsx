import React from 'react'
import './experiences.css';
import deco3 from '../res/deco-box3.png';
import moon from '../res/moon.png';
import Box from '../components/Box';

const Experiences = () => {
  const points1 = ["> Built frontend web components in an Agile environment.", "> Developed sleek user forms and user authentication.", "> Technologies used: HTML5/CSS, React.JS, Next.JS"];
  const points2 = ["> Collaborated with a team of AI experts at Stanford led by Dr. Andrew Ng to create a cutting-edge, Python and AI-based computer science curriculum for high school students that is interactive yet accessible.", "> DLed committee meetings and developed modules both in Google Colaboratory (Tensorflow) and in the web app.", "> Technologies used: Python, Tensorflow"];
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
        <Box title='Frontend Web Developer Intern' info='??? | MAY-AUGUST 2023' points={points1}/>
        <Box title='Student Advisory Council Member' info='Kira Learning | June - August 2021 & 2022' points={points2}/>
        <Box title='Frontend Web Developer Intern' info='??? | MAY-AUGUST 2023' points={points1}/>
        <Box title='Frontend Web Developer Intern' info='??? | MAY-AUGUST 2023' points={points1}/>



      </div>
      
    </main>
  )
}

export default Experiences
