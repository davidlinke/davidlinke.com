import React from 'react';

const Intro = () => {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <img className='headshot' alt='Headshot of David' src='/images/david.jpg' width='150px' height='150px' />
                <h1>
                    Hi, I'm <span className='alt3'>David Linke</span>,
                </h1>
                <h2 className='intro-subtext'>a full stack software engineer based in Fairfield County, CT currently building polished SFCC eCommerce sites.</h2>
            </div>
        </div>
    );
};

export default Intro;
