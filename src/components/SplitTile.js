import React from 'react';
import styled from 'styled-components';
import RichText from './RichText';

const Tile = styled.section`
	display: flex;
`;

const TextWrapper = styled.div`
	width: 50%;

	h3 {
		font-weight: 100;
    font-size: 22px;
    text-align: center;
		padding: 0 100px;
	}
`;
const ImageWrapper = styled.div`
	width: 50%;

	img {
		max-width: 100%;
	}
`;

const SplitTile = ({
	backgroundColour,
	component,
	body,
	header,
	primaryLink,
	secondaryLink,
	asset,
	logo,
	floatingAsset,
	secondaryAsset,
}) => {
	console.log('helo?')
	return (
		<Tile>
			<TextWrapper>{body && <RichText document={body.json} />}</TextWrapper>
			<ImageWrapper>
				<img src={asset.file.url} alt="" />
			</ImageWrapper>
		</Tile>
	);
};

export default SplitTile;
