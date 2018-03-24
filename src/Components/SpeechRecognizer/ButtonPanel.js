import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './SpeechRecognizer.css'

const ButtonPanel = ({ listenOnClick, translateOnClick, stopRecordingOnClick, disableTranslate }) => {
	return (
		<div className="btn-panel">
			<button className="record-btn" onClick={listenOnClick}><FontAwesomeIcon icon="microphone" /></button>
      <button className="record-btn" onClick={stopRecordingOnClick}><FontAwesomeIcon icon="microphone-slash" /></button>
      <button className="translate-btn" onClick={translateOnClick} disabled={disableTranslate}>Translate</button>
		</div>
	);
}

export default ButtonPanel;