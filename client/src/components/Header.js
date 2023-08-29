import React, {useState} from 'react';
import Logo from './Logo'
import DropdownOption from './DropdownOption'
import { IoIosArrowDown ,IoIosArrowUp } from 'react-icons/io';
import './Header.css'


export default function Header() {
    const [isArtBarOpen, setArtBar] = useState(false);
    const [isTechBarOpen, setTechBar] = useState(false);

    return (
        <div className="navbar"> 
        <Logo/>
        <div className="art"> 
            <button className="button" onClick={() => setArtBar((prev) => !prev)}> 
                art
                {isArtBarOpen ? <IoIosArrowUp />: <IoIosArrowDown />}
            </button>
        <ul className={`art-menu${isArtBarOpen ? ' show-menu' : ''}`}>  
        design 
        animation 
        figure 
        deep cuts </ul>
        </div>
        <div className="tech" onClick={() => setTechBar((prev) => !prev)}> 
            <button className="button"> 
                tech
                {isTechBarOpen ? <IoIosArrowUp />: <IoIosArrowDown />} 
            </button>
            <ul className={`tech-menu${isTechBarOpen ? ' show-menu' : ''}`}>  
        software past projects </ul>
        </div>
        <div className="about"> 
            about 
        </div>
        </div>
      );
    };
    