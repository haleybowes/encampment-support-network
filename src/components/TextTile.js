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
	justify-content: space-between;
	background-color: lightgrey;
	margin: 0 15px 20px 10px;
	border-radius: 6px;
	box-shadow: 1px 1px #060b04, 2px 2px #060b04, 3px 3px #060b04, 4px 4px #060b04, 5px 5px #060b04,
		6px 6px #060b04, 7px 7px #060b04, 8px 8px #060b04;

	@media (min-width: 768px) {
		width: ${({ component }) => (component === 'FullTextTile' ? '100%' : '46%')};
		margin: 0 15px 30px;
		border-radius: 6px;
		box-shadow: 1px 1px #060b04, 2px 2px #060b04, 3px 3px #060b04, 4px 4px #060b04, 5px 5px #060b04,
			6px 6px #060b04, 7px 7px #060b04, 8px 8px #060b04, 9px 9px #060b04, 10px 10px #060b04,
			11px 11px #060b04, 12px 12px #060b04;
	}

	@media (min-width: 1440px) {
		margin: 0 20px 50px;
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
		letter-spacing: 0.5px;
		border-radius: 5px;
		font-weight: 500;
		border: 1px solid #060b04;
		box-shadow: 1px 1px #060b04, 2px 2px #060b04, 3px 3px #060b04, 4px 4px #060b04, 5px 5px #060b04,
			6px 6px #060b04;
		transition: 0.25s box-shadow, 0.25s transform;
		padding: 10px 25px;

		@media (min-width: 1024px) {
			padding: 15px 40px;
			font-size: 20px;
		}

		&:hover {
			box-shadow: unset;
			transform: translate(0.3em, 0.2em);
		}
	}
`;

const Image = styled.img`
	max-width: 100%;
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

		@media (min-width: 768px) {
			margin-left: 25px;
			margin-top: 0;
		}
	}
`;

const Asset = styled.img`
	margin: 0 auto 10px;

	@media(min-width: 768px) {
		max-width: 350px;
	}

	@media(min-width: 1024px) {
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
	floatingAsset,
	secondaryAsset,
}) => {
	console.log(primaryLink, secondaryLink);
	return (
		<StyledTile component={component}>
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
					<LinkWrapper>
						{primaryLink && <Link link={primaryLink} />}
						{secondaryLink && <Link link={secondaryLink} />}
					</LinkWrapper>
				)}
			</TextWrapper>
			{asset && <Image src={asset.file.url} />}
		</StyledTile>
	);
};

export default TextTile;
