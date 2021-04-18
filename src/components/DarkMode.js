// Adapted from https://pantaley.com/blog/Create-a-dark-mode-in-React-with-CSS-variables-and-localStorage/

import React, { Fragment, useState, useEffect } from 'react';
import Helmet from 'react-helmet';

const themeType = {
    dark: 'dark',
    light: 'light',
};

const DarkModeSwitch = () => {
    const [mode, setMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const val = localStorage.getItem('theme');

            // If not stored in local storage, try to set theme based on media query
            if (!val) {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    return themeType.dark;
                }
            }

            return val ? JSON.parse(val) : themeType.light;
        }
        return themeType.light;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', JSON.stringify(mode));
        }
    }, [mode]);

    const toggleMode = () => {
        setMode(mode === themeType.light ? themeType.dark : themeType.light);
    };

    return (
        <Fragment>
            <Helmet>
                <body className={mode} />
            </Helmet>
            <div className='theme-mode' onClick={toggleMode} role='button' tabIndex='0' onKeyDown={toggleMode}>
                <div className='toggle-button'>
                    <input type='checkbox' className='toggle-button-checkbox' defaultChecked={mode === themeType.dark ? 'checked' : ''} />
                    <div className='toggle-button-knobs'>
                        <span></span>
                    </div>
                    <div className='toggle-button-layer'></div>
                </div>
            </div>
        </Fragment>
    );
};

export default DarkModeSwitch;
