import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';

const Tile = styled.section`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 30px 20px;

	p:first-of-type {
		margin-bottom: 15px;
	}

	@media(min-width: 768px) {
		width: 50%;
	}

	@media(min-width: 1024px) {
		order: 1;
		padding: 100px 20px;
	}
`;

const ImageWrapper = styled.div`
	display: flex;

	@media (min-width: 768px) {
		width: 25%;
	}

	&:first-of-type {
		align-items: flex-start;
		padding: 20px;

		@media(min-width: 768px) {
			order: 1;
			align-items: center;
			padding: 0;
		}

		@media(min-width: 1024px) {
			padding: 20px;
		}
	}

	&:last-of-type {
		align-items: flex-end;
		padding-left: 35px;

		@media(min-width: 768px) {
			order: 1;
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
