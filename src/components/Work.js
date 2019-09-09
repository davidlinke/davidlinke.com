import React from 'react';
import workhistory from '../data/workhistory.json';

const Work = () => {
	return (
		<div className='outerContainer workContainer'>
			<div className='innerContainer'>
				<h2>WORK / EDUCATION</h2>
				<div className='workContainer'>
					<div className='allWork'>
						{workhistory.map((pastJob, index) => {
							return (
								<div key={`history${index}`} className={'individualWork'}>
									<span
										className={`timelineDot ${index === 0 && 'topTimelineDot'}`}
									>
										•
									</span>
									{/* <span className='timelineDot'>&#9679;</span> */}
									<p className='workTitle'>{pastJob.title}</p>
									<p className='workCompany'>{pastJob.company}</p>
									<p className='workDescription'>{pastJob.description}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
