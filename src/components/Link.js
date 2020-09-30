import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';

import RichText from '../components/RichText';

const StyledGatsbyLink = styled(GatsbyLink)`
	color: #060B04;
	border: 1px solid #060B04;
	border-radius: 5px;
	padding: 20px 40px;
	display: inline-block;
	text-align: center;
	transition: all ease-in-out 0.2s;

	&:hover {
		background-color: #060B04;
		color: #F6F6EB;
	}
`;

const StyledLink = styled.a`
	color: #060B04;
	border: 1px solid #060B04;
	border-radius: 5px;
	padding: 15px 30px;
	display: inline-block;
	text-align: center;
	transition: all ease-in-out 0.2s;

	@media (min-width: 768px) {
		padding: 20px 40px;
	}

	&:hover {
		background-color: #060B04;
		color: #F6F6EB;
	}
`;

const Link = ({ link }) => {
	const isInternal = /^\/(?!\/)/.test(link.linkUrl);
	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, text) => <span>{text}</span>,
		},
	};

	if (isInternal) {
		return (
			<StyledGatsbyLink to={link.linkUrl}>
				<RichText document={link.linkText.json} customOptions={options} />
			</StyledGatsbyLink>
		);
	}

	return (
		<StyledLink href={link.linkUrl} target="_blank">
			<RichText document={link.linkText.json} customOptions={options} />
		</StyledLink>
	);
};

export default Link;
