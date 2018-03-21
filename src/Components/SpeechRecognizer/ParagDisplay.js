import React from 'react';

const ParagDisplay = ({ textList, tempText }) => {
	return (
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
	);
}

export default ParagDisplay;