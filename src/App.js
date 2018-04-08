import React, { Component } from 'react';
import './index.css';

import Jumbotron from "./components/Jumbotron"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    userGuesses: []
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Footer />
      </div>
    )
  }
}

export default App;
