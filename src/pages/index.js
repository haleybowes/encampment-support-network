import React from 'react';
import { graphql } from 'gatsby';

const Home = ({ data }) => {
	console.log(data);
	return <h1>hi!</h1>;
};

export const query = graphql`
	query MyQuery {
		contentfulPage(internalName: { eq: "Main" }) {
			id
			content {
				... on ContentfulTile {
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
