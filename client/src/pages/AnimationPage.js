import React, { useEffect } from 'react'
import './Global.css'
import './AnimationPage.css'
import { Link } from 'react-router-dom'
import { FLYING_HOME_STILL_URL, GOODBYE_STILL_URL, PROPOGATE_STILL_URL, SHADOWS_STILL_URL } from '../MediaUtil'

export default function AnimationPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='desktop'>
      <div className='layout'>
        <h1 className='page-title'>
          Animation
        </h1>
        <div className='content'>
          <div className='animation-row'>
            <Link className='element' to='/art/animation/shadows'>
              <img className='element-still' alt='animation still' src={SHADOWS_STILL_URL}></img>
              <p className='element-title'> shadows catching up to each other</p>
            </Link>
            <Link className='element' to='/art/animation/goodbye'>
              <img className='element-still' alt='animation still' src={GOODBYE_STILL_URL}></img>
              <p className='element-title'> good bye</p>
            </Link>
          </div>
          <div className='animation-row'>
            <Link className='element' to='/art/animation/propagate'>
              <img className='element-still' alt='animation still' src={PROPOGATE_STILL_URL}></img>
              <p className='element-title'> propagate </p>
            </Link>
            <Link className='element' to='/art/animation/flyinghome'>
              <img className='element-still' alt='animation still' src={FLYING_HOME_STILL_URL}></img>
              <p className='element-title'> flying home </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}