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
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 150px 0 50px;

	h1 {
		font-size: 36px;
		font-weight: 600;
		margin-bottom: 1rem;
		line-height: 36px;
	}
`;

const StyledHero = styled.section`
	display: flex;
	min-height: 650px;
`;

const FloatingAsset = styled.img`
	position: absolute;
	/* top: -35px; */
	right: -300px;
	bottom: 0;
`;

const Asset = styled.div`
	width: 50%;
	height: 100%;
	background-image: url(${({ backgroundImage }) => backgroundImage});
	border-radius: 6px;
	background-size: cover;
	background-position: center;
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
