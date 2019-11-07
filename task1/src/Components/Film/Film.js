import React, { Component } from 'react';

function Film(props) {
    return (
        <div className="film">
            <img src={props.link} alt="poster"/>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
        </div>
    )
}

export default Film