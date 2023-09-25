import React from 'react'
import './projects.css';
import deco1 from '../res/deco-box1.png';
import deco2 from '../res/deco-box2.png';
import deco3 from '../res/deco-box3.png';
import Thumbnail from '../components/Thumbnail';
import Miso from '../res/misotn.png';
import Pokemon from '../res/pokemon.png';
import Visionary from '../res/visionary.png';
import Stanpods from '../res/stanpods.png';
const Projects = () => {

  return (
    <main className='project-section'>
      <div className='project-head' name="project-section">
        <div className='white-line'>
        </div>
        <div className='main-line'>
          <p className='choose'>
            CHOOSE YOUR PROJECT...
          </p>
          <div className='buttons'>
            <img src={deco1} alt=''/>
            <img src={deco2} alt=''/>
            <img src={deco3} alt=''/>
          </div>
        </div>
        <div className='white-line'>
        </div>
      </div>

      <div className='project-thumbnails'>
        <Thumbnail name="Miso: UofTHacks Winner" image={Miso} link="https://github.com/stanleyylin/Miso"/>
        <Thumbnail name="Pokemon: Java Edition" image={Pokemon} link="https://github.com/stanleyylin/Pokemon"/>
        <Thumbnail name="Visionary: Hack the North Winner" image={Visionary} link="https://github.com/stanleyylin/visionary" />
        <Thumbnail name="StanPods Music Blog" image={Stanpods} link="https://github.com/stanleyylin/StanPods"/>


      </div>
    </main>
  )
}

export default Projects
