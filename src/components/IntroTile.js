import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';

const Tile = styled.section`
	display: flex;
`;

const Body = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	p:first-of-type {
		margin-bottom: 15px;
	}
`;

const ImageWrapper = styled.div`
	width: 25%;
	display: flex;

	&:first-of-type {
		align-items: center;
	}

	&:last-of-type {
		align-items: flex-end;

		img {
			transform: scaleX(-1);
		}
	}

	img {
		max-width: 100%;
	}
`;

const IntroTile = ({ asset, body, floatingAsset, header }) => {
	return (
		<Tile>
			{floatingAsset && (
				<ImageWrapper>
					<img src={floatingAsset.file.url} alt="" />
				</ImageWrapper>
			)}
			<Body>
				{body && <RichText document={body.json} />}
				{header && <RichText document={header.json} />}
			</Body>
			{asset && (
				<ImageWrapper>
					<img src={asset.file.url} alt="" />
				</ImageWrapper>
			)}
		</Tile>
	);
};

export default IntroTile;
