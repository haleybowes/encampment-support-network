import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
	p {
		margin-top: 2rem;
	}

	input {
		background-color: #c89220;
		color: #010754;
		border: 1px solid #010754;
		border-radius: 6px;
		padding: 6px 10px;
		width: 100%;
	}

	&:last-of-type {
		input {
			height: 200px;
		}
	}
`;

const StyledForm = styled.form`
	margin-top: 2rem;

    button {
        margin: 2rem auto;
        min-width: 150px;
        display: block;
		border-radius: 5px;
		transition: 0.25s box-shadow, 0.25s transform;
        padding: 15px 120px;
		border: 1px solid #010754;
		box-shadow: 1px 1px #f83a11, 2px 2px #f83a11, 3px 3px #f83a11, 4px 4px #f83a11, 5px 5px #f83a11,
			6px 6px #f83a11;
		color: #010754;
        background-color: #c89220;
        font-size: 18px;

		&:hover,
		&:focus {
			box-shadow: unset;
			transform: translate(0.3em, 0.2em);
		}
	}
`;

const ContactUsForm = () => {
	const [formStatus, setFormStatus] = useState();

	const submitForm = (e) => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setFormStatus('SUCCESS');
			} else {
				setFormStatus('ERROR');
			}
		};
		xhr.send(data);
	};

	return (
		<StyledForm onSubmit={submitForm} action="https://formspree.io/f/xwkwbbgk" method="POST">
			<StyledLabel htmlFor="name">
				<p>Name</p>
				<input type="text" name="name" id="name" />
			</StyledLabel>
			<StyledLabel htmlFor="email">
				<p>Email</p>
				<input type="email" name="email" id="email" />
			</StyledLabel>
			<StyledLabel htmlFor="message">
				<p>Message</p>
				<input type="text" name="message" id="message" />
			</StyledLabel>
			{formStatus === 'SUCCESS' ? <p>Thank you for your submission! We will be in touch shortly.</p> : <button aria-label="Submit Contact Us form.">Submit</button>}
			{formStatus === 'ERROR' && <p>Ooops! Something went wrong. Please refresh your page and try again.</p>}
		</StyledForm>
	);
};

export default ContactUsForm;
