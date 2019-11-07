import React, { Component } from 'react';
import Film from "./film/film";

function FilmList() {
    return (
        <div className="film-list-block">
            <Film title="It" date="21.09.2017" link="https://upload.wikimedia.org/wikipedia/ru/f/ff/%D0%9E%D0%BD%D0%BE_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0%2C_2017%29.jpg" />
            <Film title="Warcraft" date="24.05.2016" link="https://images-na.ssl-images-amazon.com/images/I/71nCoWPii-L._SY679_.jpg"/>
            <Film title="Газгольдер" date="24.04.2014" link="https://www.kino-teatr.ru/movie/poster/108148/73002.jpg" />
        </div>
    )
}

export default FilmList;