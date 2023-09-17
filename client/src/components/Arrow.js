import React, { useState } from 'react'
import arrow from '../assets/arrow.png'
import arrowHover from '../assets/arrow.gif'
import './Arrow.css'
import { Link } from 'react-router-dom'

export default function Arrow() {
    const [hover, setHover] = useState(false);
    return (
        <Link className='container' to='home'
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <p className='text'> let's go explore! </p>
            <img className='arrow' src={hover ? arrowHover : arrow} alt='arrow' width='40' />
        </Link>
    )
}
