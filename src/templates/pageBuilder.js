import React from 'react';

import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import Tile from '../components/Tile';
import IntroTile from '../components/IntroTile';
import GlobalStyle from '../styles/globalStyles';
import TextTile from '../components/TextTile';
import Hero from '../components/Hero';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 5px;
	max-width: 1440px;
	margin: 80px auto 0;
`;

const StyledPage = styled.div``;
const PageBuilder = ({ content }) => {
	if (!content) return null;

	return (
		<StyledPage>
			<GlobalStyle />
			<Nav />
			<Wrapper>
				{content.map((child) => {
					switch (child.component) {
						case 'Hero':
							return <Hero key={child.id} {...child} />;
						case 'HalfTile':
						case 'FullTile':
							return <Tile key={child.id} {...child} />;
						case 'IntroTile':
							return <IntroTile key={child.id} {...child} />;
						case 'TextTile':
							return <TextTile key={child.id} {...child} />;
						default:
							return null;
					}
				})}
			</Wrapper>
		</StyledPage>
	);
};

export default PageBuilder;
