import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';
import Link from '../components/Link';

const Wrapper = styled.section``;

const StyledTile = styled.div`
	background-color: ${({ backgroundColour }) => backgroundColour};
`;

const LinkWrapper = styled.div``;

const Tile = ({ backgroundColour, component, body, header, primaryLink, secondaryLink, asset }) => {
	console.log(asset, 'hello');
	return (
		<Wrapper>
			<StyledTile backgroundColour={backgroundColour}>
				{header && <RichText document={header.json} />}
				{body && <RichText document={body.json} />}
				{primaryLink && (
					<LinkWrapper>
						<Link link={primaryLink} />
					</LinkWrapper>
				)}
			</StyledTile>
		</Wrapper>
	);
};

export default Tile;
