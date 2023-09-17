import React from 'react'
import './LandingPage.css'
import './Global.css'
import backgroundDesign from '../assets/homepage-background.png'
import Arrow from '../components/Arrow.js'
import Hoverable from '../components/Hoverable'

export default function LandingPage() {
  return (
    <div className='desktop'>
      <div className='desktop-layout'>
        <div className='main-text'>
          <p className='hi-my-name-is-andrea'>
            <span className='text-wrapper'>hi, my name is </span>
          </p>
          <p className='welcome-text'>welcome to my digital home!</p>
          <div className='explore'> <Arrow /> </div>
        </div>
        <img className='space-cuties' alt='background design' src={backgroundDesign} />
        <div className='hover-components'> <Hoverable name='underline'/> </div>
      </div>
    </div>
  );
};