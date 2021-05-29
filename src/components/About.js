import React from 'react';

const About = () => {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h2>ABOUT</h2>
                <p>
                    Building things has always been a passion of mine. Starting with legos as a kid and working my way up to models, electronics, and computers, I was always creating. This led me to
                    attend Worcester Polytechnic Institute, where I dove into the mechanics of electrical engineering and low-level programming.
                </p>
                <p>
                    While I was at WPI, smartphones came out and like everyone, I was excited about prospects of carrying a computer in my pocket. This led me to join Applico, where I managed the
                    strategy, design, and development of mobile apps for clients. At Applico I honed my skills in creating polished software under time constraints. After a few years at Applico an
                    opportunity arose to co-found a cleanroom products manufacturing company and I jumped at the chance. Leveraging all the knowledge I accumulated in product management, I worked to
                    simultaneously strategize how to market and sell products in the cleanroom industry, develop products better than those that currently exist, and create an eCommerce site on the
                    BigCommerce platform.
                </p>
                <p>
                    Setting up a new business was equally challenging and rewarding. Once the business was up and running, I focused primarily on marketing and sales. I started to miss that creative
                    and collaborative element in my job and decided that getting back to my engineering roots was the path I wanted to follow. After learning on my own and attending an engineering
                    bootcamp, I freelanced for a few months working with React before getting a job at ChalkTalkSPORTS. I quickly learned the ins and outs of the Salesforce Commerce Cloud platform
                    leading development on multiple eCommerce sites based on both SiteGenesis and SFRA. I became a certified Salesforce B2C Commerce Developer in February 2021. After 1.5 years at ChalkTalkSports I moved to Red Van Workshop, where I continue to build great user experiences + solid backend functionality on the SFCC platform.
                </p>
                <p>
                    When I'm not coding you can find me designing/building wood furniture, perfecting my pizza making skills, automating my home (primarily with homebridge and home-assistant), helping
                    my fiancé strategize/market her wedding photography business, and lately, tinkering with 3D printing/CAD.
                </p>
                <h3>Some tech I have been working with:</h3>
                <ul>
                    <li>Salesforce Commerce Cloud</li>
                    <li>JavaScript</li>
                    <li>HTML &amp; (S)CSS</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
                <img className='badge' alt='Salesforce Certified B2C Commerce Developer Badge' src='/images/certified_b2c_developer.png' width='100px' height='100px' />
            </div>
        </div>
    );
};

export default About;
