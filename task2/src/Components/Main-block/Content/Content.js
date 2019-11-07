import React, { Component } from 'react';
import FilmList from "./Film-list/Film-list";

function Content() {
    return (
        <div className="content">
            <h1>My favorite films</h1>
            <FilmList/>
        </div>
    )
}

export default Content;