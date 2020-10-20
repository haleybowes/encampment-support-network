import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';

const Logo = styled.div`
	text-align: center;
	margin-bottom: 10px;

	img {
		max-width: 130px;
	}
`;

const Text = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 1023px) {
		order: 1;
		max-width: 70%;
		padding: 60px 0 60px 20px;
	}

	@media (min-width: 1024px) {
		width: 50%;
		padding: 0 150px 0 50px;
	}

	h1 {
		font-size: 30px;
		font-weight: 600;
		line-height: 36px;

		@media (min-width: 1024px) {
			font-size: 36px;
			margin-bottom: 1rem;
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

const FloatingAsset = styled.img`
	position: absolute;
	bottom: 0;

	@media (min-width: 1024px) {
		right: -280px;
	}
`;

const Asset = styled.div`
	background-image: url(${({ backgroundImage }) => backgroundImage});
	border-radius: 6px;
	background-size: cover;
	background-position: center;

	@media (max-width: 1023px) {
		height: 525px;
	}

	@media (min-width: 1024px) {
		width: 50%;
		height: 100%;
	}
`;

const Hero = ({ logo, header, body, floatingAsset, asset }) => {
	return (
		<StyledHero>
			<Text>
				{logo && (
					<Logo>
						<img src={logo.file.url} alt="" />
					</Logo>
				)}
				{header && <RichText document={header.json} />}
				{body && <RichText document={body.json} />}
				<FloatingAsset src={floatingAsset.file.url} />
			</Text>
			<Asset backgroundImage={asset.file.url} />
		</StyledHero>
	);
};

export default Hero;
