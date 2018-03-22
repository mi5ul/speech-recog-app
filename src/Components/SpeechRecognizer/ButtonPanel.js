import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './ButtonPanel.css'

const ButtonPanel = ({ listenOnClick, translateOnClick, stopRecordingOnClick, disableTranslate }) => {
	return (
		<div>
			<button onClick={listenOnClick}><FontAwesomeIcon icon="microphone" /></button>
      <button onClick={stopRecordingOnClick}><FontAwesomeIcon icon="microphone-slash" /></button>
      <button onClick={translateOnClick} disabled={disableTranslate}>Translate</button>
		</div>
	);
}

export default ButtonPanel;