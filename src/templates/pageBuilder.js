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

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	max-width: 1440px;
	margin: 0 auto;

	@media(min-width: 1024px) {
		justify-content: space-around;
	}
`;

const StyledPage = styled.div``;
const PageBuilder = ({ content }) => {
	if (!content) return null;

	const hero = content.find(section => section.component === 'Hero');
	console.log(hero);
	return (
		<StyledPage>
			<GlobalStyle />
			<Nav />
			<Hero {...hero} />
			<Wrapper>
				{content.map((child) => {
					switch (child.component) {
						case 'SplitTile':
							return <SplitTile key={child.id} {...child} />
						case 'ListTile':
							return <ListTile key={child.id} {...child} />
						case 'HalfTile':
						case 'FullTile':
							return <Tile key={child.id} {...child} />;
						case 'IntroTile':
							return <IntroTile key={child.id} {...child} />;
						case 'TextTile':
						case 'FullTextTile':
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
