import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';
import Link from '../components/Link';

const Logo = styled.div`
	text-align: center;
	margin-bottom: 10px;

	img {
		max-width: 130px;
	}
`;

const StyledTile = styled.div`
	display: flex;
	flex-direction: column;
	color: #202020;
	justify-content: space-between;

	@media (max-width: 768px) {
		width: 100%;

		div {
			height: ${({ background }) => background && '350px'};
		}
	}

	&:nth-of-type(even) {
		background: ${({ background }) => !background && '#010754'};

		h2,
		p {
			color: #a7c442;
		}

		a {
			background: #010754;
			color: #a7c442;
			border: 1px solid #a7c442;
		}
	}

	background-color: #bd7001;
	margin: 0 15px 20px 10px;
	border-radius: 6px;
	box-shadow: 1px 1px #2928ce, 2px 2px #2928ce, 3px 3px #2928ce, 4px 4px #2928ce, 5px 5px #2928ce,
		6px 6px #2928ce, 7px 7px #2928ce, 8px 8px #2928ce;
	background-image: url(${({ background }) => background});
	background-size: cover;
	background-position: center;

	@media (min-width: 768px) {
		width: ${({ component }) => (component === 'FullTextTile' ? '100%' : '46%')};
		margin: 0 15px 30px;
		border-radius: 6px;
		box-shadow: 1px 1px #2928ce, 2px 2px #2928ce, 3px 3px #2928ce, 4px 4px #2928ce, 5px 5px #2928ce,
			6px 6px #2928ce, 7px 7px #2928ce, 8px 8px #2928ce, 9px 9px #2928ce, 10px 10px #2928ce,
			11px 11px #2928ce, 12px 12px #2928ce;
	}

	@media (min-width: 1440px) {
		margin: ${({ component }) => (component === 'FullTextTile' ? '0 30px 50px' : '0 20px 50px')};
	}

	h2,
	p {
		color: #010754;
	}

	h1 {
		font-size: 40px;
		font-weight: 600;
		text-align: center;
		line-height: 38px;
		margin-bottom: 16px;
	}

	h2 {
		line-height: 24px;

		@media (min-width: 1024px) {
			font-size: 32px;
			line-height: 32px;
		}
	}

	h3 {
		&:last-of-type {
			margin-bottom: 10px;
		}
	}

	p {
		margin-bottom: 12px;

		@media (min-width: 1024px) {
			font-size: 18px;
			line-height: 24px;
		}
	}

	a {
		color: #060b04;
		display: inline-block;
		background-color: ${({ backgroundColour }) => backgroundColour};
		border-radius: 5px;
		transition: 0.25s box-shadow, 0.25s transform;
		padding: 10px 25px;
		background-color: #bd7001;
		border: 1px solid #010754;
		box-shadow: 1px 1px #f83a11, 2px 2px #f83a11, 3px 3px #f83a11, 4px 4px #f83a11, 5px 5px #f83a11,
			6px 6px #f83a11;
		color: #010754;
		font-weight: 500;

		@media (min-width: 1024px) {
			padding: 15px 40px;
		}

		&:hover,
		&:focus {
			box-shadow: unset;
			transform: translate(0.3em, 0.2em);
		}
	}
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: auto;
	text-align: center;
	object-fit: contain;

	img {
		width: 100%;
	}
`;

const TextWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding: 35px 25px 0 25px;

	h3 {
		font-weight: 100;
		font-size: 22px;
		text-align: center;
	}

	@media (min-width: 1024px) {
		padding: 90px 80px 20px;
	}
`;

const LinkWrapper = styled.div`
	position: relative;
	margin: 20px 0 48px 0;

	@media (min-width: 1024px) {
		margin: 25px 0 90px;
		display: flex;
		align-items: center;
	}

	a:nth-of-type(2) {
		text-align: center;
		display: inline-block;
		margin-top: 30px;

		@media (min-width: 376px) and (max-width: 767px) {
			margin-left: 10px;
		}

		@media (min-width: 768px) {
			margin-left: 25px;
			margin-top: 0;
		}
	}
`;

const Asset = styled.img`
	margin: 0 auto 10px;

	@media (min-width: 768px) {
		max-width: 350px;
	}

	@media (min-width: 1024px) {
		max-width: 500px;
	}
`;

const TextTile = ({
	backgroundColour,
	component,
	body,
	header,
	primaryLink,
	secondaryLink,
	asset,
	logo,
	secondaryAsset,
}) => {
	return (
		<StyledTile
			background={!header && !body && asset.file.url}
			backgroundColour={backgroundColour}
			component={component}
		>
			<TextWrapper component={component}>
				{logo && (
					<Logo>
						<img src={logo.file.url} alt="" />
					</Logo>
				)}
				{secondaryAsset && <Asset src={secondaryAsset.file.url} alt="" />}
				{header && <RichText document={header.json} />}
				{body && <RichText document={body.json} />}
				{(primaryLink || secondaryLink) && (
					<LinkWrapper backgroundColour={backgroundColour}>
						{primaryLink && <Link link={primaryLink} />}
						{secondaryLink && <Link link={secondaryLink} />}
					</LinkWrapper>
				)}
			</TextWrapper>
			{asset && header && (
				<ImageWrapper>
					<img src={asset.file.url} alt="" />
				</ImageWrapper>
			)}
		</StyledTile>
	);
};

export default TextTile;
