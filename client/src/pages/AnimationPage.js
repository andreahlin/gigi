import React from 'react';
import './Global.css'
import photo from '../assets/animation-still.png'
import './AnimationPage.css'
import { Link } from 'react-router-dom'

export default function AnimationPage() {
  return (
    <div className="desktop">
      <div className="layout">
        <h1 className="page-title">
          Animation
        </h1>
        <div className="row">
          <Link className="element" to="/home/animation/shadows">
            <img className="element-still" alt="animation still" src={photo}></img>
            <p className="element-title"> shadows catching up to each other</p>
          </Link>
          <Link className="element" to="/home/animation/goodbye">
            <img className="element-still" alt="animation still" src={photo}></img>
            <p className="element-title"> good bye</p>
          </Link>
        </div>
        <div className="row">
          <Link className="element" to="/home/animation/propogate">
            <img className="element-still" alt="animation still" src={photo}></img>
            <p className="element-title"> propogate </p>
          </Link>
          <Link className="element" to="/home/animation/flyinghome">
            <img className="element-still" alt="animation still" src={photo}></img>
            <p className="element-title"> flying home </p>
          </Link>
        </div>
      </div>
    </div>
  );
}