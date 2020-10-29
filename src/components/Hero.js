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
	margin-top: 85px;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	/* background-color: #f83a11; */
	/* padding: 50px 20px; */

	@media (min-width: 768px) {
		/* padding: 50px 80px; */
	}

	@media (min-width: 1024px) {
		width: 50%;
		/* padding: 0 20px; */
	}

	@media (min-width: 1024px) {
		padding: 0 40px;
	}

	h1 {
		margin-bottom: 10px;
		font-weight: 600;
		text-align: center;
		font-size: 28px;
		line-height: 28px;
		font-size: 60px;
		line-height: 55px;
		/* color: #f6f6eb; */

		/* span {
			display: inline-block;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				width: 102%;
				background: #f83a11;
				left: -1px;
				right: 0;
				bottom: 10px;
				height: 80%;
				z-index: -1;
			}
		} */
		/* 
		span {
			display: inline;
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
				height: 90%;
				z-index: -1;
			}
		} */

		@media (min-width: 768px) {
			font-size: 70px;
			line-height: 65px;
		}

		@media (min-width: 1440px) {
			font-size: 36px;
			line-height: 32px;
			margin-bottom: 2rem;
			font-size: 80px;
			line-height: 72px;
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

const Hero = ({ logo, header, body, asset, floatingAsset }) => {
	console.log(logo);
	return (
		<StyledHero >
			<Text backgroundImage={logo.file.url}>
				{/* {logo && (
					<Logo>
						<img src={logo.file.url} alt="" />
					</Logo>
				)} */}
				{header && <RichText document={header.json} />}
				{/* {body && <RichText document={body.json} />} */}
			</Text>
			<Asset backgroundImage={asset.file.url} />
		</StyledHero>
	);
};

export default Hero;
