import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';

const Logo = styled.div`
	text-align: center;
	margin-bottom: 10px;

	img {
		max-width: 100px;

		@media (min-width: 1024px) {
			max-width: 130px;
		}
	}
`;

const Text = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	order: 1;
	padding: 50px 20px;

	@media (min-width: 768px) {
		padding: 50px 80px;
	}

	@media (min-width: 1024px) {
		width: 50%;
		padding: 0 70px;
	}

	h1 {
		margin-bottom: 10px;
		font-weight: 600;
		text-align: center;
		font-size: 28px;
		line-height: 28px;

		@media (min-width: 1024px) {
			font-size: 36px;
			line-height: 32px;
			margin-bottom: 2rem;
		}
	}

	p span {
		display: inline;
		background-color: #F83A11;
		color: #f6f6eb;
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

	@media (max-width: 1023px) {
		height: 525px;
	}

	@media (min-width: 1024px) {
		width: 50%;
		margin-top: 80px;
		min-height: 700px;
	}
`;

const Hero = ({ logo, header, body, asset }) => {
	console.log(asset);
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
			</Text>
			<Asset backgroundImage={asset.file.url} />
		</StyledHero>
	);
};

export default Hero;
