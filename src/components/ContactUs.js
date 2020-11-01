import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';
import ContactUsForm from '../components/ContactUsForm';

const StyledContactUsPage = styled.section`
    margin: 85px 20px 0;

    @media (min-width: 768px) {
        max-width: 80%;
        margin: 85px auto 0;
    }

	h1 {
        margin-top: 2rem;
		font-size: 40px;
		text-align: center;
		margin-bottom: 2rem;
        font-weight: 600;
	}

    p {
        margin-bottom: 10px;

        a {
            background-color: #f83a11;
            color: #F6F6EB;
        }
    }

    a {
        text-transform: unset;
        font-weight: 500;
    }
`;

const ContactUs = ({ body, header }) => {
	return (
		<StyledContactUsPage>
			{header && <RichText document={header.json} />}
			{body && <RichText document={body.json} />}
			<ContactUsForm />
		</StyledContactUsPage>
	);
};

export default ContactUs;
