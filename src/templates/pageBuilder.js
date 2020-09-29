import React from 'react';

import styled from 'styled-components';
import Header from '../components/Header';
import Tile from '../components/Tile';
import GlobalStyle from '../styles/globalStyles';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const StyledPage = styled.div``;
const PageBuilder = ({ content }) => {
	if (!content) return null;

	return (
		<StyledPage>
			<GlobalStyle />
			<Header />
			<Wrapper>
				{content.map((child) => {
					switch (child.component) {
						case 'HalfTile':
							return <Tile key={child.id} {...child} />;
						default:
							return null;
					}
				})}
			</Wrapper>
		</StyledPage>
	);
};

export default PageBuilder;
