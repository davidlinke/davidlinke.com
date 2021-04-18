import React from 'react';
import workhistory from '../data/workhistory.json';

const Work = () => {
    return (
        <div className='outer-container work-container'>
            <div className='inner-container'>
                <h2>WORK / EDUCATION</h2>
                <div className='work-container'>
                    <div className='all-work'>
                        {workhistory.map((pastJob, index) => {
                            return (
                                <div key={`history${index}`} className={'individual-work'}>
                                    <span className={`timeline-dot ${index === 0 && 'top-timeline-dot'}`}>•</span>
                                    <p className='work-title'>{pastJob.title}</p>
                                    <p className='work-company'>{pastJob.company}</p>
                                    <p className='work-description'>{pastJob.description}</p>
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
