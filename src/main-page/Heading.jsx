import React from 'react'
import './heading.css';
import me from '../res/me.png';
import star from '../res/star.gif';

function Header() {
  return (
    <header className='background'>
      <div className='box'>
        <div className='box-line'></div>
        <div className='box-center'>about_me.png</div>
        <div className='box-line'></div>
        <div className='first-row'>
          <img src={me} className='stanley' alt='Stanley Lin'/>
          <p className='intro'>HI. I'M <span className='emphasis'>STANLEY</span>.<br/>I'M A PASSIONATE <span className='emphasis'>SOFTWARE DEVELOPER</span>.</p>
        </div>
        <div className='second-row'>
          <img src={star} className='star' alt='star icon'/>
          <p className='special'>Currently, I'm a Computer Science Student at the University of Waterloo!</p>
        </div>
      </div>
    </header>
  );
};

export default Header
