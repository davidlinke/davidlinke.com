import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='outer-container' id='contact'>
            <div className='inner-container'>
                <h2>CONTACT</h2>
                {/* Email address encoded with http://www.wbwip.com/wbw/emailencoder.html */}
                <p className='contact-text'>
                    Send me a message here or via{' '}
                    <a href='mailto: &#100;&#097;&#118;&#105;&#100;&#064;&#100;&#097;&#118;&#105;&#100;&#108;&#105;&#110;&#107;&#101;&#046;&#099;&#111;&#109;'>
                        &#100;&#097;&#118;&#105;&#100;&#064;&#100;&#097;&#118;&#105;&#100;&#108;&#105;&#110;&#107;&#101;&#046;&#099;&#111;&#109;
                    </a>
                </p>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
