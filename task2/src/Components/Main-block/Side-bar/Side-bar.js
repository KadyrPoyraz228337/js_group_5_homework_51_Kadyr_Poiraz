import React, { Component } from 'react';

function SideBar() {
    return (
        <aside className="sideBar">
            <h4>Genres</h4>
            <ul>
                <li><a href="#">Fantasy</a></li>
                <li><a href="#">Horror</a></li>
                <li><a href="#">comedy</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">melodrama</a></li>
            </ul>
        </aside>
    )
}

export default SideBar;