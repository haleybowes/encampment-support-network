import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';

const StyledFooter = styled.footer`
    border-top: 2px solid #010754;
    padding: 35px 0;

    @media (max-width: 768px) {
        padding: 30px 0;
    }

	p {
		font-family: gopher, sans-serif;
        text-align: center;
	}
`;

const Footer = ({ body }) => {
	return <StyledFooter>{body && <RichText document={body.json} />}</StyledFooter>;
};

export default Footer;
