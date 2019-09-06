import React from 'react';

const Intro = () => {
	return (
		<div className='outerContainer introContainer'>
			<div className='innerContainer'>
				<img className='headshot' alt='self portrait' src='/images/david.jpg' />
				<h1>
					Hi, I'm <span className='orange'>David Linke</span>.
				</h1>
				{/* <h1>I'm a full stack software engineer.</h1> */}
				<h2>
					I'm a full stack software engineer based in Fairfield County, CT / New
					York, NY specializing in building highly polished websites and
					applications.
				</h2>
			</div>
		</div>
	);
};

export default Intro;
