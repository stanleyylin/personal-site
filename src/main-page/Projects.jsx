import React from 'react'
import './projects.css';
import deco1 from '../res/deco-box1.png';
import deco2 from '../res/deco-box2.png';
import deco3 from '../res/deco-box3.png';
import Thumbnail from '../components/Thumbnail';
import Miso from '../res/misotn.png';
import Pokemon from '../res/pokemon.png';
import Fridge from '../res/fridgesmart.png';
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
        <Thumbnail name="Miso: UofTHacks Winner" image={Miso} />
        <Thumbnail name="Pokemon" image={Pokemon} />
        <Thumbnail name="FridgeSmart: DeltaHacks" image={Fridge} />
        <Thumbnail name="Miso: UofT Hacks Winner" image={Miso} />


      </div>
    </main>
  )
}

export default Projects
