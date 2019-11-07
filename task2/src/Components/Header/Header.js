import React, { Component } from 'react';
import Navigation from './Nav-bar/Nv-bar';

function Header() {
    return (
        <header className="header">
            <h1 className="logo"><a href="#">KInoPoisk</a></h1>
            <Navigation/>
        </header>
    )
}

export default Header;