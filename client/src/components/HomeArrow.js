import React, { useState } from 'react';
import arrows from '../assets/home-arrows.gif'
import arrowsHidden from '../assets/home-arrows-hidden.png'
import { Link } from 'react-router-dom'

export default function HomeArrow() {
    const [hover, setHover] = useState(false);
    return (
        <Link className="container" to="home"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <img className="arrows" src={hover ? arrows : arrowsHidden} alt="arrows" width="225" />
        </Link>
    )
}