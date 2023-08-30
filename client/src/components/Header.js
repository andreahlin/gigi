import React, {useState} from 'react';
import Logo from './Logo'
import './Header.css'
import carrot from '../assets/carrot-navy.png' 
import { Link } from 'react-router-dom'


export default function Header() {
    const [isArtBarOpen, setArtBar] = useState(false);
    const [isTechBarOpen, setTechBar] = useState(false);

    return (
        <div className="navbar"> 
        <div className="logo"> 
        <Link className = "page-link"  to="/"> <Logo/> </Link>
        </div>
        <div className="art"> 
            <button className="button" onClick={() => setArtBar((prev) => !prev)}> 
                art
                <img className={`carrot${isArtBarOpen? ' up' : '' } `} alt="carrot" src={carrot} />
            </button>
        <ul className={`art-menu${isArtBarOpen ? ' show-menu' : ''}`}>  
        <Link className = "page-link" to="/design" > design </Link>
        <Link className = "page-link" to="/animation"> animation </Link> 
        <Link className = "page-link" to="/figure">figure </Link> 
        <Link className = "page-link" to="/deepcuts"> deep cuts </Link> </ul>
        </div>
        <div className="tech"> 
            <button className="button" onClick={() => setTechBar((prev) => !prev)}> 
                tech
                <img className={`carrot${isTechBarOpen? ' up' : '' } `} alt="carrot" src={carrot} />
            </button>
            <ul className={`tech-menu${isTechBarOpen ? ' show-menu' : ''}`}>  
        <Link className = "page-link" to="/software"> software </Link>
        <Link className = "page-link" to="/projects"> past projects </Link> </ul>
        </div> 
        <Link className = "about-link" to="/about"> about </Link>
        </div>
      );
    };
    