import React, { Component } from 'react';

function navigation() {
    return (
        <nav className="nav-bar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#" className="disabled">My favorite films</a></li>
            </ul>
        </nav>
    )
}

export default navigation;