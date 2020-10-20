import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';

import RichText from '../components/RichText';

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
		return <GatsbyLink to={linkUrl}>{children}</GatsbyLink>;
	}

	return (
		<a href={linkUrl} rel="noreferrer" target="_blank">
			{children}
		</a>
	);
};

export default Link;
