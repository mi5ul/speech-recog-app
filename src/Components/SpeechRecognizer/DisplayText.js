import React from 'react';
import './SpeechRecognizer.css'

const DisplayText = ({ translation, textList, tempText }) => {
	return (
		<div className="speech-text">
			<div>
				{
					textList.map((item, i) => {
						return (
							<span key={i}>{item}</span>
						)
					})	
				}
				<span>{tempText}</span>
			</div>
			<div className="translation">{translation}</div>
		</div>
	);
}

export default DisplayText;