import React, { useState } from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';

function ContactForm() {
	const { register, handleSubmit, errors } = useForm();

	const [submitState, setSubmitState] = useState('notYetSubmitted');

	const onSubmit = async (data, e) => {
		console.log(data);
		e.target.reset();

		// let config = {
		// 	headers: {
		// 		'Content-Type': 'application/x-www-form-urlencoded'
		// 	}
		// };

		// const response = await axios.post('/', data, config);
		// console.log(response);
		// console.log(response.status);
		// console.log(typeof response.status);
		// if (response.status === 200) {
		// 	setSubmitState('success');
		// 	console.log(submitState);
		// } else {
		// 	setSubmitState('error');
		// 	console.log(submitState);
		// }

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contactForm', ...data })
		})
			.then(() => console.log('success'))
			.catch(error => console.log(error));
	};

	return (
		<form
			name='contactForm'
			className='contactForm'
			onSubmit={handleSubmit(onSubmit)}
		>
			<input type='hidden' name='form-name' value='contactForm' />
			<input
				name='name'
				placeholder='Name'
				ref={register({ required: true })}
				className='contactInput'
			/>
			{errors.name && (
				<p className='formErrorMessage'>Please enter your name.</p>
			)}
			<input
				name='email'
				placeholder='Email'
				ref={register({
					required: true,
					pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
				})}
				className='contactInput'
			/>

			{errors.email && (
				<p className='formErrorMessage'>Please enter a valid email address.</p>
			)}

			<textarea
				name='message'
				placeholder='Message'
				ref={register({ required: true })}
				className='contactInput'
			/>

			{errors.message && (
				<p className='formErrorMessage'>Please enter a message.</p>
			)}

			<input type='submit' value='Send Message' />

			{submitState === 'success' && (
				<p className='formSuccessMessage'>
					Thank you for contacting me, I will respond as quickly as I can!
				</p>
			)}
			{submitState === 'error' && (
				<p className='formErrorMessage formFailToSendMessage'>
					Error sending message. Please try again or email me directly.
				</p>
			)}
		</form>
	);
}

export default ContactForm;
