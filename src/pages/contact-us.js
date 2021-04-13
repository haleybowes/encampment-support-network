import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import PageBuilder from '../templates/pageBuilder';

export const StyledWrapper = styled.div`
	margin: 303px 0;
`;

const ContactUs = ({ data }) => <StyledWrapper><PageBuilder content={data.contentfulPage.content} /></StyledWrapper>;

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
