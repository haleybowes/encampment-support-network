import React from 'react';

import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import Tile from '../components/Tile';
import GlobalStyle from '../styles/globalStyles';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 5px;
	max-width: 1200px;
	margin: 0 auto;
`;

const StyledPage = styled.div`
	
`;
const PageBuilder = ({ content }) => {
	if (!content) return null;

	return (
		<StyledPage>
			<GlobalStyle />
			<Nav />
			<Wrapper>
				{content.map((child) => {
					switch (child.component) {
						case 'HalfTile':
						case 'FullTile':
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
