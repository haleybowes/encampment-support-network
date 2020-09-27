import React from 'react';
import { graphql } from 'gatsby';
import PageBuilder from '../templates/pageBuilder';

const Home = ({ data }) => {
	return <PageBuilder content={data.contentfulPage.content} />
};

export const query = graphql`
	query MyQuery {
		contentfulPage(internalName: { eq: "Main" }) {
			id
			content {
				... on ContentfulTile {
					id
					backgroundColour
					component
					body {
						json
					}
					header {
						json
					}
					primaryLink {
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

export default Home;
