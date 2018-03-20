// Final challenge will be how to deploy the app on GitHub Pages without using a node server
// Consider not using React i.e. use vanilla JS - see: https://www.youtube.com/watch?time_continue=602&v=kkjAcbNIFBI

// To do: 
// - make functions to color every paragraph in a different color
// - display text across the whole screen
// - perhaps also make every paragraph different size and weight
// - think about not using paragraphs but using a character do set apart e.g. a spades icon etc.

import React, { Component } from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import './App.css';
import ParagDisplay from './ParagDisplay'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      finalText: []
    }
  }

  onListenClick() {
    fetch('http://localhost:3002/api/speech-to-text/token')
      .then(function(response) {
          return response.text();
      }).then((token) => {
        var stream = recognizeMic({
            token: token,
            objectMode: true, // send objects instead of text
            extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
            format: false // optional - performs basic formatting on the results such as capitals an periods
        });
        stream.on('data', (data) => {
          this.setState({
            text: data.alternatives[0].transcript,
          })
          if (data.final) {
            this.setState({
              finalText: [...this.state.finalText, data.alternatives[0].transcript],
              text: ''
            })
          }
        });
        stream.on('error', function(err) {
            console.log(err);
        });
        document.querySelector('#stop').onclick = stream.stop.bind(stream);
      }).catch(function(error) {
          console.log(error);
      });
  }

  render() {
    return (
      <div className="text-output">
        <button className="btn" onClick={this.onListenClick.bind(this)}>Start Mic</button>
        <button className="btn" id='stop'>Stop Mic</button>
        <ParagDisplay textList={this.state.finalText} tempText={this.state.text}/>
      </div>
    );
  }
}

export default App;