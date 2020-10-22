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
	padding: 30px 20px;

	@media (min-width: 1024px) {
		width: 50%;
		padding: 0 150px 0 50px;
	}

	h1 {
		margin-bottom: 10px;
		font-weight: 600;
		text-align: center;
		font-size: 28px;
		line-height: 28px;

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

	/* a {
		padding: 15px 30px;
		text-decoration: none;
		font-size: 18px;
		display: block;
		margin: 20px auto;
	}

	.btn,
	.btn:link,
	.btn:visited {
		color: #2c3e50;
		line-height: 1em;
		text-decoration: none;
		display: inline-block;
		border-radius: 6px;
		box-shadow: 0 0 0 0 #2c3e50 inset, 0.3em 0.2em 0 0 #bbb;
		border: 2px solid #2c3e50;
		padding: 0.8em;
		text-align: center;
		transition: 0.25s box-shadow, 0.25s transform;

		&:hover {
			box-shadow: 0 4em 0 0 #2c3e50 inset, 0em 0em 0 0 #bbb;
			transform: translate(0.3em, 0.2em);
			color: #fff;
		}
	} */

	/* .button {
		border: 1px solid #060b04;
		box-shadow: 1px 1px #060b04, 2px 2px #060b04, 3px 3px #060b04, 4px 4px #060b04, 5px 5px #060b04,
			6px 6px #060b04;
		transition: 0.25s box-shadow, 0.25s transform;

		&:hover {
			box-shadow: unset;
			transform: translate(0.3em, 0.2em);
		}
	} */
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
	margin: 5px;

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
				{/* <a href="#" class="btn">
					Cool Button
				</a>
				<a href="#" class="button">
					Cool Button
				</a> */}
				{header && <RichText document={header.json} />}
				{body && <RichText document={body.json} />}
				<FloatingAsset src={floatingAsset.file.url} />
			</Text>
			<Asset backgroundImage={asset.file.url} />
		</StyledHero>
	);
};

export default Hero;
