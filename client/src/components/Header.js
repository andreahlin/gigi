import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import HeaderButton from './HeaderButton'
import logo from '../assets/logo-navy.png'

export default function Header() {
    return (
        <div className='navbar'>
            <Link className='page-link' to='/home'>
                <img className='logo' alt='logo' src={logo} />
            </Link>
            <div className='space'> </div>
            <HeaderButton name='tech' />
            <HeaderButton name='art' />
            <Link className='about-link' to='/about'> about </Link>
        </div>
    );
};
