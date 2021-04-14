import React from 'react';
import { graphql } from 'gatsby';

import PageBuilder from '../templates/pageBuilder';

const NewsletterPage = ({ data }) => <PageBuilder content={data.contentfulPage.content} />;

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