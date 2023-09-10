import React from "react";
import Header from "../components/Header"
import { Outlet  } from "react-router-dom";
import './Global.css'
import './HomePage.css'
import image from '../assets/home-image.png'
import arrows from '../assets/home-arrows.gif'
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

export default function HomePage() {
return (
      <div className="desktop">
      <Header/>
      <div className="home-image-layout">
      <img alt="space-image" src={image} width="800" />
      </div>
      <img className="flowers" alt="arrows" src={arrows} height="200"/>
      <img className="flowers" alt="animation" src={animationFlower} height="200"/>
      <img className="flowers" alt="animation" src={animationTag} height="200"/>
      <img className="flowers" alt="zine" src={zineFlower} height="200"/>
      <img className="flowers" alt="zine" src={zineTag} height="200"/>
      <img className="flowers" alt="deep cuts" src={deepCutsFlower} height="200"/>
      <img className="flowers" alt="deep cuts" src={deepCutsTag} height="200"/>
      <img className="flowers" alt="sketch" src={sketchFlower} height="200"/>
      <img className="flowers" alt="sketch" src={sketchTag} height="200"/>
      <img className="flowers" alt="software" src={softwareFlower} height="200"/>
      <img className="flowers" alt="software" src={softwareTag} height="200"/>
      <img className="flowers" alt="ux" src={uxFlower} height="200"/>
      <img className="flowers" alt="ux" src={uxTag} height="200"/>

      <Outlet  />
      </div>
    );
}