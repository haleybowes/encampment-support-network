import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';

import RichText from '../components/RichText';

const StyledLink = styled.div`
	a {
		color: #2f56b0;
		position: relative;
		text-decoration: none;
		transition: color 0.4s ease-out;
	}

	a:hover {
		right: 0;
		text-decoration: none;
	}

	a:hover:after {
		border-color: #457dfb;
		right: 0;
	}

	a:after {
		border-radius: 1em;
		border-top: 0.1em solid #2f56b0;
		content: '';
		position: absolute;
		right: 100%;
		bottom: 0.14em;
		left: 0;
		transition: right 0.3s cubic-bezier(0, 0.5, 0, 1), border-color 0.4s ease-out;
	}

	a:hover:after {
		animation: anchor-underline 2s cubic-bezier(0, 0.5, 0, 1);
		border-color: #457dfb;
	}

	@keyframes anchor-underline {
		0%,
		10% {
			left: 0;
			right: 100%;
		}
		40%,
		60% {
			left: 0;
			right: 0;
		}
		90%,
		100% {
			left: 100%;
			right: 0;
		}
	}
`;

const Link = ({ link: { linkUrl, linkText, image } }) => {
	const isInternal = /^\/(?!\/)/.test(linkUrl);
	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, text) => <span>{text}</span>,
		},
	};

	const children = (
		<>
			{linkText && <RichText document={linkText.json} customOptions={options} />}
			{image && <img src={image.file.url} alt="" />}
		</>
	);

	if (isInternal) {
		return (
			<StyledLink>
				<GatsbyLink to={linkUrl}>{children}</GatsbyLink>
			</StyledLink>
		);
	}

	return (
		<StyledLink>
			<a href={linkUrl} rel="noreferrer" target="_blank">
				{children}
			</a>
		</StyledLink>
	);
};

export default Link;
