import React from 'react';

const DisplayText = ({ translation, textList, tempText }) => {
	return (
		<div>
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
			<div>{translation}</div>
		</div>
	);
}

export default DisplayText;