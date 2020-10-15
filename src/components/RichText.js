import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import * as Contentful from '@contentful/rich-text-react-renderer';

const RichText = ({ document, customOptions }) => {
	let options;
	if (!customOptions) {
		options = {
			renderMark: {
				[MARKS.BOLD]: (text) => <strong>{text}</strong>,
				[MARKS.ITALIC]: (text) => <em>{text}</em>,
				[MARKS.CODE]: html => ReactHtmlParser(html),
			},
			renderNode: {
				[BLOCKS.PARAGRAPH]: (node, text) => <p>{text}</p>,
				[BLOCKS.UL_LIST]: (node, text) => <ul>{text}</ul>,
				[BLOCKS.LIST_ITEM]: (node, text) => <li>{text}</li>,
			},
		};
	} else {
		options = customOptions;
	}

	return Contentful.documentToReactComponents(document, options);
};

export default RichText;
