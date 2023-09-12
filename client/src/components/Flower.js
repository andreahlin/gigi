import React, { useState } from 'react';
import animationFlower from '../assets/space-flowers/animation-flower.png'
import animationTag from '../assets/space-flowers/animation-tag.png'
import zineFlower from '../assets/space-flowers/zine-flower.png'
import zineTag from '../assets/space-flowers/zine-tag.png'
import deepCutsFlower from '../assets/space-flowers/deep-cuts-flower.png'
import deepCutsTag from '../assets/space-flowers/deep-cuts-tag.png'
import sketchFlower from '../assets/space-flowers/sketch-flower.png'
import sketchTag from '../assets/space-flowers/sketch-tag.png'
import softwareFlower from '../assets/space-flowers/software-flower.png'
import softwareTag from '../assets/space-flowers/software-tag.png'
import uxFlower from '../assets/space-flowers/ux-flower.png'
import uxTag from '../assets/space-flowers/ux-tag.png'
import './Flower.css'
import { Link } from 'react-router-dom'

export default function Flower(props) {
    var flowerHover = "";
    var flower = "";
    var to = "";
    var width = 70;
    switch (props.name) {
        case 'animation':
            flower = animationFlower
            flowerHover = animationTag
            to = "/art/animation"
            width = 75;
            break;
        case 'zine':
            flower = zineFlower
            flowerHover = zineTag
            width = 65;
            to = "/art/zine"
            break;
        case 'sketch':
            flower = sketchFlower
            flowerHover = sketchTag
            to = "/art/figure"
            break;
        case 'deepCuts':
            flower = deepCutsFlower
            flowerHover = deepCutsTag
            to = "/art/deepcuts"
            break;
        case 'software':
            flower = softwareFlower
            flowerHover = softwareTag
            to = "/tech/software"
            width = 80;
            break;
        case 'ux':
            flower = uxFlower
            flowerHover = uxTag
            to = "/tech/ux"
            break;
        default:
            flower = animationFlower
            flowerHover = animationTag
            to = "/art/animation"
            break;
    }

    console.log("to: " + to)
    const [hover, setHover] = useState(false);

    return (
        <Link className="container" to={to}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <img className="arrow" src={hover ? flowerHover : flower} alt="flower" width={width} />
        </Link>
    )
}
