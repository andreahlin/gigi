import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FiCornerDownRight } from 'react-icons/fi'
import { BiHome, BiGhost, BiFlag } from 'react-icons/bi'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='hot-links'>
                <div className='tech-hot-links'>
                    <p>tech</p>
                    <p>&nbsp;<FiCornerDownRight/><Link className='hot-link' to='/tech/software'>software</Link></p>
                    <p>&nbsp;<FiCornerDownRight/><Link className='hot-link' to='/tech/ux'>ux</Link></p>
                </div>
                <div className='art-hot-links'>
                    <p>art</p>
                    <p>&nbsp;<FiCornerDownRight /><Link className='hot-link' to='/art/animation'>animation</Link></p>
                    <p>&nbsp;<FiCornerDownRight /><Link className='hot-link' to='/art/zine'>zine</Link></p>
                    <p>&nbsp;<FiCornerDownRight /><Link className='hot-link' to='/art/sketch'>sketch</Link></p>
                    <p>&nbsp;<FiCornerDownRight /><Link className='hot-link' to='/art/potpourri'>potpourri</Link></p>
                </div>
                <div className='home-hot-links'>
                    <p><BiHome />&nbsp;<Link className='hot-link' to='/home'>home</Link></p>
                    <p><BiGhost />&nbsp;<Link className='hot-link' to='/about'>about</Link></p>
                    <p><BiFlag />&nbsp;<Link className='hot-link' to='/'>landing <br />&nbsp;&nbsp;&nbsp;page</Link></p>
                </div>

            </div>
            <div className='email-info'>
                <br/>Questions? Concerns? Have a hot take? <b>Get in touch! </b>
                <p><a className='email-address' href='mailto: andhualin@gmail.com'>andhualin@gmail.com</a><br/></p>
            </div>
        </div>
    );
};
