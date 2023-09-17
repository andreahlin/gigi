import React from 'react'
import Logo from './Logo'
import './Header.css'
import { Link } from 'react-router-dom'
import HeaderButton from './HeaderButton'

export default function Header() {
    return (
        <div className='navbar'>
            <Link className='page-link' to='/home'> <Logo/> </Link>
            <div className ='space'> </div>
            <HeaderButton name='tech' />
            <HeaderButton name='art' />
            <Link className='about-link' to='/about'> about </Link>
        </div>
    );
};
