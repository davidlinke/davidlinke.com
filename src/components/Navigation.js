import React from 'react';
// import { scroller } from 'react-scroll';
import DarkMode from './DarkMode';

const Navigation = () => {
    // const scrollTo = (id) => {
    //     scroller.scrollTo(id, {
    //         duration: 2000,
    //         smooth: 'easeOutQuad',
    //     });
    // };

    return (
        <div className='outer-container nav-container'>
            <a className='nav-logo' href='/'>
                David Linke
            </a>
            {/* <div className='links'>
                <button className='no-outline' onClick={() => scrollTo('contact')}>
                    Contact
                </button>
                <form className='button-form' action='davidlinke_resume.pdf' method='get'>
                    <button>Resume</button>
                </form>
            </div> */}
            <DarkMode />
        </div>
    );
};

export default Navigation;
