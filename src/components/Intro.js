import React from 'react';

const Intro = () => {
	return (
		<div className='outerContainer introContainer'>
			<div className='innerContainer'>
				<img className='headshot' src='/images/david.jpg' />
				<h1>
					Hi, I'm <span className='orange'>David Linke</span>.
				</h1>
				<h1>I'm a full stack software engineer.</h1>
				<p></p>
			</div>
		</div>
	);
};

export default Intro;
