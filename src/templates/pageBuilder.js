import React from 'react';

import styled from 'styled-components';
import Header from '../components/Header';
import HalfTile from '../components/HalfTile';

const StyledPage = styled.div``;
const PageBuilder = ({ content }) => {
	if (!content) return null;

	return (
		<StyledPage>
			<Header />
			{content.map(child => {
				console.log(child, 'hello?')
				switch(child.component) {
					case 'HalfTile':
						return <HalfTile key={child.id} {...child} />
					default:
						return null;
				}
			})}
		</StyledPage>
	)
};

export default PageBuilder;