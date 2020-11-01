import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';
import { useStaticQuery } from 'gatsby';

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

const Footer = () => {
	const { contentfulFooter: { copyright } } = useStaticQuery(graphql`
		query FooterQuery {
			contentfulFooter {
                id
                copyright {
                    json
                }
			}
		}
    `);
    
    return <StyledFooter>{copyright && <RichText document={copyright.json} />}</StyledFooter>
};

export default Footer;
