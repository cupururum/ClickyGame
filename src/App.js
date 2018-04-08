import React, { Component } from 'react';
import './index.css';

import images from "./images.json"

import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ImageList from "./components/ImageList"



class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    images: images,
    userGuesses: []
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Jumbotron />
        <ImageList images={this.state.images}/>
        <Footer />
      </div>
    )
  }
}

export default App;
