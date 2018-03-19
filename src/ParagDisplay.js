import React from 'react';

const ParagDisplay = ({ textList, tempText }) => {
	return (
		<div>
			<div>
				{
					textList.map((item, i) => {
						return (
							<p key={i}>{item}</p>
						)
					})	
				}
			</div>
			<p>{tempText}</p>
		</div>
	);
}

export default ParagDisplay;