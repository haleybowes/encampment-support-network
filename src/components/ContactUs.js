import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';
import Link from '../components/Link';

const StyledContactUsPage = styled.section`
    margin: 90px 20px 0;
    
    @media (min-width: 768px) {
        margin: 90px auto 0;
        width: 80%;
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
        font-size: 18px;

        a {
            background-color: #f83a11;
            color: #F6F6EB;
            transition: all ease 0.2s;

            &:hover,
            &:focus {
                color: #010754;
            }
        }
    }

    ul {
		list-style-type: circle;
        color: #f6f6eb;
        display: flex;
        flex-wrap: wrap;

        li {
            flex-shrink: 0;
            margin-left: 40px;
        }
    }

    a {
        text-transform: unset;
        font-weight: 500;
    }
`;

const LinkWrapper = styled.div`
    text-align: center;
    margin: 50px 0 -50px;

    a {
        color: #060b04;
        text-transform: uppercase;
        display: inline-block;
        border-radius: 5px;
        transition: 0.25s box-shadow, 0.25s transform;
        padding: 10px 25px;
        border: 1px solid #010754;
        box-shadow: 1px 1px #f83a11, 2px 2px #f83a11, 3px 3px #f83a11, 4px 4px #f83a11, 5px 5px #f83a11,
            6px 6px #f83a11;
        color: #010754;

        @media (min-width: 1024px) {
            padding: 15px 40px;
        }

        &:hover,
        &:focus {
            box-shadow: unset;
            transform: translate(0.3em, 0.2em);
        }
    }
`;

const ContactUs = ({ body, header, primaryLink }) => {
    return (
        <StyledContactUsPage>
            {header && <RichText document={header.json} />}
            {body && <RichText document={body.json} />}
            {primaryLink && <LinkWrapper>
                <Link link={primaryLink} />
            </LinkWrapper>}
        </StyledContactUsPage>
    )
}

export default ContactUs;
