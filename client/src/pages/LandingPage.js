import React from 'react'
import './LandingPage.css'
import './Global.css'
import { Link } from 'react-router-dom'
import backgroundDesign from '../assets/homepage-background.png'

export default function LandingPage() {
  return (
    <div className="desktop">
      <div className="main-text">
        <p className="hi-my-name-is-andrea">
          <span className="text-wrapper">hi, my name is </span>
          <Link className="span" to="home/about">andrea</Link>
          <span className="text-wrapper">.</span>
        </p>
        <p className="welcome-text">welcome to my digital home!</p>
        <Link className="explore-text" to="home">let’s go explore!</Link>
      </div>
      <img className="space-cuties" alt="background design" src={backgroundDesign} />
    </div>
  );
};
