import React from 'react';
import Logo from './Logo'
import './Header.css'
import { Link } from 'react-router-dom'
import HeaderButton from './HeaderButton'

export default function Header() {
    return (
        <div className="navbar">
            <Link className="page-link" to="/"> <Logo/> </Link>
            <div className ="space"> </div>
            <HeaderButton name="art" />
            <HeaderButton name="tech" />
            <Link className="about-link" to="/home/about"> about </Link>
        </div>
    );
};
