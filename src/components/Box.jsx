import React from 'react'
import './box.css';

const Box = ({ title, info, points }) => {
  return (
    <section className='experience-container'>
      <div className='white-part'>
        <p className='exp-title'>{title}</p>
        <p className='exp-info'>{info}</p>
      </div>
      <div className='pink-part'>
        <ul>
          {points.map((item) => (
            <li key={item} className='point'>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Box
