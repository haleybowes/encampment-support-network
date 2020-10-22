import React from 'react';
import styled from 'styled-components';
import RichText from './RichText';

const Tile = styled.section`
	display: flex;
	flex-direction: column;
`;

const TextWrapper = styled.div`
	/* width: 50%; */

	h3 {
		font-weight: 100;
		text-align: center;
		margin: 0 auto;
		max-width: 500px;
		font-size: 18px;
		line-height: 22px;
		padding: 0 20px 30px;

		@media (min-width: 768px) {
			font-size: 20px;
			line-height: 24px;
		}

		@media (min-width: 1440px) {
			font-size: 22px;
		}
		/* padding: 0 100px; */
	}
`;
const ImageWrapper = styled.div`
	/* width: 50%; */
	text-align: right;

	img {
		max-width: 95%;
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
	console.log('helo?');
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
