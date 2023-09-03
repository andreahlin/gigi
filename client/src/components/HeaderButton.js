import React, { useState } from 'react';
import carrot from '../assets/carrot-navy.png'
import { HeaderButtonInfo } from './HeaderButtonInfo';

export default function HeaderButton(props) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="button-layout">
            <button className="button" onClick={() => setShowInfo(true)}>
                {props.name}
                <img className={`carrot${showInfo ? ' up' : ''} `} alt="" src={carrot} />
            </button>
            <HeaderButtonInfo
                className="info-box"
                name={props.name} 
                show={showInfo} 
                hideOnClick={() => { setShowInfo(false) }} />
        </div>);

} 