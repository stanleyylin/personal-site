import React from 'react'
import prev from '../res/prev.png';
import play from '../res/play.png';
import next from '../res/next.png';
import nope from '../res/x.png';

import './thumbnail.css';
const Thumbnail = (props) => {
  return (
    <div className='project-container'>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className="top-title-bar">
          <img src={nope} className='close' alt=''/>
        </div>
        <img className='project-photo' src={props.image} alt={props.name}/>
        <div className="bottom-title-bar">
          <img src={prev} className="music-buttons" alt=''/>
          <img src={play} className="music-buttons" alt=''/>
          <img src={next} className="music-buttons" alt=''/>
        </div>
        <p className='project-title' >{props.name}</p>
      </a>
    </div>
  )
};

export default Thumbnail
