import React, { useState } from 'react';
import useForm from 'react-hook-form';

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

function ContactForm() {
    const { register, handleSubmit, errors } = useForm();

    const [submitState, setSubmitState] = useState('notYetSubmitted');

    const onSubmit = async (data, e) => {
        e.target.reset();

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contactForm', ...data }),
        })
            .then(function (response) {
                if (response.status === 200) {
                    setSubmitState('success');
                } else {
                    // console.log(
                    // 	`Error: Status ${response.status}. ${response.statusText}`
                    // );
                    setSubmitState('error');
                }
            })
            .catch(function (error) {
                // console.log(error);
                setSubmitState('error');
            });
    };

    return (
        <form name='contactForm' className='contactForm' onSubmit={handleSubmit(onSubmit)}>
            <input type='hidden' name='form-name' value='contactForm' />
            <input name='name' placeholder='Name' ref={register({ required: true })} className='contact-input' />
            {errors.name && <p className='form-error-message'>Please enter your name.</p>}
            <input
                name='email'
                placeholder='Email'
                ref={register({
                    required: true,
                    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                })}
                className='contact-input'
            />

            {errors.email && <p className='form-error-message'>Please enter a valid email address.</p>}

            <textarea name='message' placeholder='Message' ref={register({ required: true })} className='contact-input' />

            {errors.message && <p className='form-error-message'>Please enter a message.</p>}

            <input type='submit' value='Send Message' />

            {submitState === 'success' && <p className='form-success-message'>Thank you for contacting me, I will respond as quickly as I can!</p>}
            {submitState === 'error' && <p className='form-error-message form-fail-to-send-message'>Error sending message. Please try again or email me directly.</p>}
        </form>
    );
}

export default ContactForm;
