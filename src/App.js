// Final challenge will be how to deploy the app on GitHub Pages without using a node server
// Consider not using React i.e. use vanilla JS - see: https://www.youtube.com/watch?time_continue=602&v=kkjAcbNIFBI

// To do: 
// - make functions to color every paragraph in a different color
// - display text across the whole screen
// - perhaps also make every paragraph different size and weight
// - think about not using paragraphs but using a character do set apart e.g. a spades icon etc.

import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Background from './Components/Background/Background';
import SpeechRecognizer from './Components/SpeechRecognizer/SpeechRecognizer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Background />
        <SpeechRecognizer />
        <Footer />
      </div>
    );
  }
}

export default App;