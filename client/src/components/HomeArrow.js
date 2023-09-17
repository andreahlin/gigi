import React, { useState } from 'react'
import arrows from '../assets/home-arrows.gif'
import arrowsHidden from '../assets/home-arrows-hidden.png'

export default function HomeArrow() {
    const [hover, setHover] = useState(false);
    return (
        <img className="arrows"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            src={hover ? arrows : arrowsHidden} 
            alt="arrows" width="225" />
    )
}