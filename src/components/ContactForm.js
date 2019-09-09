import React from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';

function ContactForm() {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = async (data, e) => {
		console.log(data);
		e.target.reset();
		const response = await axios.post(
			'https://mailthis.to/david@davidlinke.com',
			data
		);
		console.log(response);
	};

	return (
		<form className='contactForm' onSubmit={handleSubmit(onSubmit)}>
			<input
				name='name'
				placeholder='Name'
				ref={register({ required: true })}
				className='contactInput'
			/>
			{errors.name && <p>Please enter your name.</p>}
			<input
				name='email'
				placeholder='Email'
				ref={register({
					required: true,
					pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
				})}
				className='contactInput'
			/>

			{errors.email && <p>Please enter a valid email address.</p>}

			<textarea
				name='message'
				placeholder='Message'
				ref={register({ required: true })}
				className='contactInput'
			/>

			{errors.message && <p>Please enter a message.</p>}

			<input type='submit' value='Send Message' />
			<p>DON'T FORGET TO SHOW MESSAGE AFTER SUBMISSION</p>
		</form>
	);
}

export default ContactForm;
