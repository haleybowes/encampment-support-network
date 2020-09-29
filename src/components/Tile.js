import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';
import Link from '../components/Link';

const StyledTile = styled.div`
	background-color: ${({ backgroundColour }) => backgroundColour};
	max-width: 50%;

	h3 {
		margin-bottom: 10px;
		font-weight: bolder;
	}

	a {
		margin: 32px 0 70px;
	}
`;

const ImageTile = styled.div`
	max-width: 50%;
	width: 100%;
	background-size: cover;
	background-position: center;
	background-image: url(${({ background }) => background});
`;

const Image = styled.img`
	max-width: 100%;
	margin-top: 32px;
`;

const TextWrapper = styled.div`
	padding: 70px 50px 0 50px;
`;

const LinkWrapper = styled.div``;

const Tile = ({ backgroundColour, component, body, header, primaryLink, secondaryLink, asset }) => {
	console.log(asset, 'hello');
	return (
		<>
			{asset && !header ? (
				<ImageTile background={asset.file.url} />
			) : (
				<StyledTile backgroundColour={backgroundColour}>
					<TextWrapper>
						{header && <RichText document={header.json} />}
						{body && <RichText document={body.json} />}
						{primaryLink && (
							<LinkWrapper>
								<Link link={primaryLink} />
							</LinkWrapper>
						)}
					</TextWrapper>
					{asset && <Image src={asset.file.url} />}
				</StyledTile>
			)}
		</>
	);
};

export default Tile;
