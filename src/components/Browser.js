import React from 'react';

const Browser = () => {
	return (
		<div className='browser'>
			<svg x='0px' y='0px' viewBox='0 0 600 50' className='browserSVG'>
				<rect class='browserBar' width='600' height='50' />
				<circle class='leftCircle' cx='32' cy='24' r='8.8' />
				<circle class='middleCircle' cx='61.5' cy='24' r='8.8' />
				<circle class='rightCircle' cx='90.7' cy='24' r='8.8' />
				<rect
					class='addressBar'
					x='130'
					y='15.5'
					rx='10'
					ry='10'
					width='440'
					height='17.6'
				/>
			</svg>
		</div>
	);
};

export default Browser;
