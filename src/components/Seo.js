import React from 'react';
import Helmet from 'react-helmet';

const SEO = () => {
	const title = 'The Encampment Support Network';
	const metaDescription =
		'The Encampment Support Network is creating community, support and advocacy for our neighbours in encampments';
	return (
		<Helmet
			htmlAttributes={{
				lang: 'en',
			}}
			title={title}
			link={[
				{
					rel: 'canonical',
					href: 'https://encampmentsupportnetwork.netlify.app/',
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
				{ name: 'robots', content: 'noindex' },
			]}
		/>
	);
};

export default SEO;
