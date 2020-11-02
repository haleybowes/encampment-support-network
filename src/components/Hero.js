import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';

const Text = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	order: 1;

	@media (max-width: 767px) {
		padding: 50px 20px;
	}

	@media (min-width: 768px) {
		background-color: #f83a11;
	}

	@media (min-width: 1024px) {
		width: 50%;
	}

	h1 {
		margin-bottom: 16px;
		font-weight: 600;
		text-align: center;
		font-size: 28px;
		line-height: 28px;
		font-size: 50px;
		line-height: 46px;

		@media (min-width: 768px) {
			font-size: 60px;
			line-height: 52px;
			margin-bottom: 2rem;
		}

		@media (min-width: 1024px) {
			font-size: 65px;
			line-height: 55px;
		}
	}

	p {
		&:empty {
			display: none;
		}

		@media (min-width: 768px) {
			font-size: 18px;
			width: 70%;
			margin: 0 auto;
		}
	}
`;

const StyledHero = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 85px;
	max-width: 1800px;

	@media (min-width: 1024px) {
		min-height: 650px;
		flex-direction: row;
		margin: 91px 20px 0;
		border-radius: 6px;
		overflow: hidden;
	}

	@media (min-width: 1840px) {
		margin: 91px auto 0;
	}
`;

const Asset = styled.div`
	background-image: url(${({ backgroundImage }) => backgroundImage});
	background-size: cover;
	background-position: center;

	@media (max-width: 1023px) {
		height: 525px;
	}

	@media (min-width: 768px) {
		min-height: 700px;
	}

	@media (min-width: 1024px) {
		width: 50%;
	}
`;

const FloatingAsset = styled.div`
	@media (max-width: 767px) {
		display: none;
	}

	&:nth-of-type(2) {
		text-align: right;
	}

	img {
		max-width: 100%;
		max-width: 300px;
		padding: 10px;
	}
`;

const Hero = ({ logo, header, body, asset, floatingAsset }) => {
	return (
		<StyledHero>
			<Text>
				{floatingAsset && (
					<FloatingAsset>
						<img src={logo.file.url} alt="" />
					</FloatingAsset>
				)}
				{header && <RichText document={header.json} />}
				{body && <RichText document={body.json} />}
				{floatingAsset && (
					<FloatingAsset>
						<img src={floatingAsset.file.url} alt="" />
					</FloatingAsset>
				)}
			</Text>
			{asset && <Asset backgroundImage={asset.file.url} />}
		</StyledHero>
	);
};

export default Hero;
