import React from 'react';
import Helmet from 'react-helmet';

const SEO = () => {
	const title = 'ESN Toronto';
	const metaDescription =
		'The Encampment Support Network is creating community, support and advocacy for our neighbours in encampments.';
	return (
		<Helmet
			htmlAttributes={{
				lang: 'en',
			}}
			title={title}
			link={[
				{
					rel: 'canonical',
					href: 'https://www.encampmentsupportnetwork.com/',
				},
			]}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
			]}
		/>
	);
};

export default SEO;
