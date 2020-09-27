import React from 'react';
import { useStaticQuery } from 'gatsby';

const Header = () => {
	const data = useStaticQuery(graphql`
		query HeaderQuery {
			contentfulHeader {
				id
			}
		}
	`);

	console.log(data, 'getting header data?')
	return (
		<header>
			<h1>Header here</h1>
			{/* <h1>{data.site.siteMetadata.title}</h1> */}
		</header>
	);
};

export default Header;
