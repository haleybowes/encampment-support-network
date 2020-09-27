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
				id
				body {
					json
				}
			}
		}
	}
`;

export default Home;
