import React from 'react';

const ButtonPanel = ({ listenOnClick, translateOnClick, stopRecordingOnClick, disableTranslate }) => {
	return (
		<div>
			<button onClick={listenOnClick}>Record</button>
      <button onClick={stopRecordingOnClick}>Stop</button>
      <button onClick={translateOnClick} disabled={disableTranslate}>Translate</button>
		</div>
	);
}

export default ButtonPanel;