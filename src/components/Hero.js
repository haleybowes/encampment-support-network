import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';

const Logo = styled.div`
	text-align: center;
	margin-bottom: 10px;

	img {
		max-width: 100%;
		width: 300px;

		@media (min-width: 1440px) {
			width: 350px;
		}
	}
`;

const Text = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	order: 1;
	background-image: url(${({ backgroundImage }) => backgroundImage});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	/* background-color: #f83a11; */
	/* padding: 50px 20px; */

	@media (max-width: 767px) {
		padding: 50px 20px;
	}

	@media (min-width: 1024px) {
		width: 50%;
		margin-top: 85px;
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
			font-size: 72px;
			line-height: 67px;
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

		@media (min-width: 1024px) {
			padding: 0 50px 50px;
			font-size: 20px;
			width: auto;
		}
	}
`;

const StyledHero = styled.section`
	display: flex;
	flex-direction: column;

	@media (min-width: 1024px) {
		min-height: 650px;
		flex-direction: row;
	}
`;

const Asset = styled.div`
	background-image: url(${({ backgroundImage }) => backgroundImage});
	border-radius: 6px;
	background-size: cover;
	background-position: center;
	margin: 5px;
	margin-top: 85px;

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

	img {
		max-width: 100%;
		padding: 10px;
	}
`;

const Hero = ({ logo, header, body, asset, floatingAsset }) => {
	console.log(logo);
	return (
		<StyledHero>
			<Text>
				{/* {logo && (
					<Logo>
						<img src={logo.file.url} alt="" />
					</Logo>
				)} */}
				{floatingAsset && (
					<FloatingAsset>
						<img src={logo.file.url} alt="" />
					</FloatingAsset>
				)}
				{header && <RichText document={header.json} />}
				{/* <Button>Learn more</Button> */}
				{body && <RichText document={body.json} />}
				{floatingAsset && (
					<FloatingAsset>
						<img src={floatingAsset.file.url} alt="" />
					</FloatingAsset>
				)}
			</Text>
			<Asset backgroundImage={asset.file.url} />
		</StyledHero>
	);
};

export default Hero;
