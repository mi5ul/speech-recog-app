import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Background from './Components/Background/Background';
import SpeechRecognizer from './Components/SpeechRecognizer/SpeechRecognizer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Background />
        <SpeechRecognizer />
        <Footer />
      </div>
    );
  }
}

export default App;