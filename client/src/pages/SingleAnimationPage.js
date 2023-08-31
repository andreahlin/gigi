import React from 'react';
import './Global.css'
import './SingleAnimationPage.css'
import photo from '../assets/animation-still.png'
import { useParams } from "react-router-dom";

export default function SingleAnimationPage() {
    const id = useParams().id;
    var video; 
    var title = "";
    
    switch(id) {
        case 'shadows':
            video = <img className="video" alt="animation still" src={photo} />
            title = "shadows catching up to each other";
            break;
        case 'goodbye':
            video = <img className="video" alt="animation still" src={photo} />
            title = "good bye";
            break;
        case 'propogate':
            video = <img className="video" alt="animation still" src={photo} /> 
            title = "propogate";
            break;
        case 'flyinghome':
            video = <img className="video" alt="animation still" src={photo} />
            title = "flying home";
            break;
        default:
            title = "N/A"

    }
    return (
        <div className="desktop">
            <div className="layout">
                {video}
                <p className="video-title"> {title} </p>
            </div>
        </div>
    );
}