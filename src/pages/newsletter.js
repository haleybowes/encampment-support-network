import React from 'react';
import { graphql } from 'gatsby';

import PageBuilder from '../templates/pageBuilder';
import { StyledWrapper } from '../pages/contact-us.js'

const NewsletterPage = ({ data }) => <StyledWrapper><PageBuilder content={data.contentfulPage.content} /></StyledWrapper>;

export const query = graphql`
	query NewsletterPageQuery {
		contentfulPage(internalName: { eq: "Newsletter Page" }) {
			id
			content {
				... on ContentfulTile {
					id
					component
					body {
						json
					}
					header {
						json
                    }
                    primaryLink {
						component
						altText
						linkUrl
						linkText {
							json
						}
					}
				}
			}
		}
	}
`;

export default NewsletterPage;