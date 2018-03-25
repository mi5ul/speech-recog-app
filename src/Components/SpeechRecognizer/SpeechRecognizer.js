import React, { Component } from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import DisplayText from './DisplayText'
import ButtonPanel from './ButtonPanel'
import './SpeechRecognizer.css';

class SpeechRecognizer extends Component {
  constructor() {
    super()
    this.state = {
      text: '', // Text the API is "deciding on"
      finalText: [], // Finalized API output
      translation: '',
      voiceStream: null,
      disableTranslate: true,
    }
  }

  listenOnClick() {
    // Reset the state when the record button is pressed
    this.setState({
      text: '',
      finalText: [],
      translation: '',
      disableTranslate: true,
    });

    fetch('https://speech-to-text-nodejs-server.mybluemix.net/api/speech-to-text/token')
      .then(function(response) {
          return response.text();
      })
      .then((token) => {
        var stream = recognizeMic({
          token: token,
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: true // optional - performs basic formatting on the results such as capitals an periods
        });
        stream.on('data', (data) => {
          this.setState({
            text: data.alternatives[0].transcript,
          });
          if (data.final) {
            this.setState({
              finalText: [...this.state.finalText, data.alternatives[0].transcript],
              text: ''
            });
          }
        });
        stream.on('error', function(err) {
          console.log(err);
        });

        this.setState({voiceStream: stream});

        // document.querySelector('#stop').onclick = stream.stop.bind(stream);

      })
      .catch(function(error) {
          console.log(error);
      });
  }

  stopRecording = () => {
    if (this.state.voiceStream != null) {
      this.state.voiceStream.stop();
      this.setState({
        voiceStream: null,
        disableTranslate: false,
      });
    }
  }

  translateOnClick = () => {
    let inputText = this.state.finalText.join('');
    fetch(`http://api.funtranslations.com/translate/australian.json?text=${inputText}`)
      .then(response => response.json())
      .then(obj => {
        console.log(obj);
        this.setState({
          translation: obj.contents.translated,
          disableTranslate: true,
        });
      });
  }

  render() {
    return (
      <div className="speech-container">
        <ButtonPanel 
          listenOnClick={this.listenOnClick.bind(this)} 
          translateOnClick={this.translateOnClick} 
          stopRecordingOnClick={this.stopRecording}
          disableTranslate={this.state.disableTranslate}
        />
        <DisplayText translation={this.state.translation} textList={this.state.finalText} tempText={this.state.text}/>
      </div>
    );
  }
}

export default SpeechRecognizer;