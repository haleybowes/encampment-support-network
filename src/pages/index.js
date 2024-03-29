import React from 'react';
import { graphql } from 'gatsby';
import PageBuilder from '../templates/pageBuilder';

const Main = ({ data }) => <PageBuilder content={data.contentfulPage.content} />;

export const query = graphql`
	query MyQuery {
		contentfulPage(internalName: { eq: "Main" }) {
			id
			content {
				... on ContentfulTile {
					id
					addDropShadow
					backgroundColour
					component
					logo {
						file {
							url
						}
					}
					body {
						json
					}
					header {
						json
					}
					asset {
						id
						description
						file {
							url
						}
					}
					secondaryLink {
						component
						altText
						linkUrl
						linkText {
							json
						}
						caret {
							file {
								url
							}
						}
					}
					primaryLink {
						component
						altText
						linkUrl
						linkText {
							json
						}
						caret {
							file {
								url
							}
						}
					}
					floatingAsset {
						id
						file {
							url
						}
					}
				}
			}
		}
	}
`;

export default Main;
