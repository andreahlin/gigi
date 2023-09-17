import React, { useState } from 'react'
import './Hoverable.css'
import { NAME_UNDERLINE, NAME_UNDERLINE_HIDDEN } from '../MediaUtil'
import { Link } from 'react-router-dom'

export default function Hoverable(props) {
    var imageOnHover = '';
    var image = '';
    var className = '';

    switch (props.name) {
        case 'underline':
            image = NAME_UNDERLINE_HIDDEN
            imageOnHover = NAME_UNDERLINE
            className = props.name
            break;
    }

    const [hover, setHover] = useState(false);

    return (
        <Link className='andrea-container' to='/about'
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
        <p className='andrea-text'> andrea </p>
        <img 
            className = {className}
            src={hover ? imageOnHover : image}
            alt='hoverable' />
        </Link>
    )
}
