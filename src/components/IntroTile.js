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

	h2 {
		font-size: 26px;
		line-height: 26px;
		font-weight: 600;
		text-align: center;
		margin-bottom: 16px;

		@media (min-width: 768px) {
			font-size: 28px;
			line-height: 28px;
		}

		@media (min-width: 1024px) {
			font-size: 40px;
			line-height: 38px;
		}
	}

	p:not(:last-of-type) {
		margin-bottom: 15px;
	}

	p span {
		display: inline-block;
		position: relative;
		color: #f6f6eb;

		&::after {
			content: '';
			position: absolute;
			width: 102%;
			background: #f83a11;
			left: -1px;
			right: 0;
			bottom: 0px;
			height: 105%;
			z-index: -1;
		}
	}

	@media (min-width: 768px) {
		width: 50%;
	}

	@media (min-width: 1024px) {
		padding: 100px 20px;
	}
`;

const ImageWrapper = styled.div`
	display: flex;

	@media (min-width: 768px) {
		width: 25%;
	}

	@media (max-width: 768px) {
		text-align: right;
	}

	&:first-of-type {
		align-items: flex-start;
		padding: 20px;

		@media (min-width: 768px) {
			align-items: center;
			padding: 0;
		}

		@media (min-width: 1024px) {
			padding: 20px;
		}
	}

	&:last-of-type {
		align-items: flex-end;
		padding-left: 35px;
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
				{header && <RichText document={header.json} />}
				{body && <RichText document={body.json} />}
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
