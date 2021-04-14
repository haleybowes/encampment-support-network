import React from 'react';
import { graphql } from 'gatsby';

import PageBuilder from '../templates/pageBuilder';

const ContactUs = ({ data }) => <PageBuilder content={data.contentfulPage.content} />;

export const query = graphql`
	query ContactUsQuery {
		contentfulPage(internalName: { eq: "Contact Us" }) {
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
				... on ContentfulForm {
					id
					component
				}
			}
		}
	}
`;

export default ContactUs;
