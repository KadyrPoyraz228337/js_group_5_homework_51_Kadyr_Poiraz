import React, { Component } from 'react';

function Film(props) {
    return (
        <a href="#" className="film-card">
            <img src={props.link} alt="" className="film-card-img"/>
            <h4 className="film-card-title">{props.title}</h4>
            <p className="film-card-date">{props.date}</p>
        </a>
    )
}

export default Film;