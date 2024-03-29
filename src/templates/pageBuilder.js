import React from 'react';

import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import Tile from '../components/Tile';
import IntroTile from '../components/IntroTile';
import GlobalStyle from '../styles/globalStyles';
import TextTile from '../components/TextTile';
import Hero from '../components/Hero';
import ListTile from '../components/ListTile';
import SplitTile from '../components/SplitTile';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import SEO from '../components/Seo';
import Toast from '../components/Toast.js';
// import ContactUsForm from '../components/ContactUsForm';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	max-width: 1440px;
	margin: 0 auto 50px;

	@media (min-width: 1024px) {
		justify-content: space-around;
	}
`;

const StyledPage = styled.div``;

const PageBuilder = ({ content }) => {
	if (!content) return null;
	const hero = content.find((section) => section.component === 'Hero');
	return (
		<StyledPage>
			<SEO />
			<GlobalStyle />
			<Nav />
			<Toast />
			{hero && <Hero {...hero} />}
			<Wrapper>
				{content.map((child) => {
					switch (child.component) {
						case 'SplitTile':
							return <SplitTile key={child.id} {...child} />;
						case 'ListTile':
							return <ListTile key={child.id} {...child} />;
						case 'HalfTile':
						case 'FullTile':
							return <Tile key={child.id} {...child} />;
						case 'IntroTile':
							return <IntroTile key={child.id} {...child} />;
						case 'TextTile':
						case 'FullTextTile':
							return <TextTile key={child.id} {...child} />;
						case 'ContactUs':
							return <ContactUs key={child.id} {...child} />;
						// case 'ContactUsForm':
						// 	return <ContactUsForm key={child.id} />;
						default:
							return null;
					}
				})}
			</Wrapper>
			<Footer />
		</StyledPage>
	);
};

export default PageBuilder;
