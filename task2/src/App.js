import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainBlock from "./Components/Main-block/Main-block";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
        <div className="container">
          <Header/>
          <MainBlock/>
          <Footer/>
        </div>
    );
  }
}

export default App;
