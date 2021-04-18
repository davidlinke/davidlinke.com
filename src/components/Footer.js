import React from 'react';
import LinkedInLogo from './imageComponents/LinkedInLogo';
import GithubLogo from './imageComponents/GithubLogo';

const Footer = () => {
    return (
        <div className='outer-container footer-container'>
            <p>Designed and built by David Linke</p>
            <a href='https://github.com/davidlinke' target='_blank' rel='noopener noreferrer'>
                <GithubLogo />
            </a>
            <a href='https://www.linkedin.com/in/david-linke/' target='_blank' rel='noopener noreferrer'>
                <LinkedInLogo />
            </a>
        </div>
    );
};

export default Footer;
