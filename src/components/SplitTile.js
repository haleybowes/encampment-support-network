import React from 'react';
import styled from 'styled-components';
import RichText from './RichText';

const Tile = styled.section`
	display: flex;
	flex-direction: column;
`;

const TextWrapper = styled.div`
	max-width: 500px;
	padding: 0 20px 30px;
	margin: 0 auto;
	text-align: center;

	@media (min-width: 768px) {
		padding: 0 45px 30px;
	}

	@media (min-width: 1440px) {
		font-size: 22px;
		line-height: 26px;
	}

	p span {
		font-family: gopher, sans-serif;
		font-weight: 500;
		display: inline;
		color: #f6f6eb;
		background-color: #F83A11;
		font-size: 18px;
		line-height: 24px;
	}
`;
const ImageWrapper = styled.div`
	text-align: right;

	img {
		max-width: 95%;
	}
`;

const SplitTile = ({
	body,
	asset,
}) => {
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
