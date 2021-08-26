import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';
import Link from '../components/Link';

const StyledTile = styled.div`
	width: 100%;
	padding: 50px 10px;

	@media (min-width: 768px) {
		width: ${({ component }) => (component === 'HalfTile' ? '50%' : '100%')};
	}

	@media (min-width: 1024px) {
		padding: 100px 0;
	}

	li {
		margin-left: 20px;
	}

	h1 {
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

	h2 {
		font-size: 32px;
		line-height: 32px;
	}

	p {
		margin-bottom: 12px;
		font-size: 18px;
		line-height: 24px;
	}

	a {
		color: #060b04;
		border: 1px solid #060b04;
		border-radius: 5px;
		padding: 20px 40px;
		display: inline-block;
		text-align: center;
		transition: all ease-in-out 0.2s;

		&:hover,
		&:focus {
			background-color: #060b04;
			color: #f6f6eb;
		}

		&:nth-of-type(2) {
			margin: 24px 0 32px;

			@media (min-width: 768px) {
				margin-left: 10px;
			}
		}

		@media (min-width: 1024px) {
			margin: 32px 0 70px;
		}
	}
`;

const ImageTile = styled.div`
	width: 100%;
	background-size: cover;
	background-position: center;
	background-image: url(${({ background }) => background});
	min-height: 320px;
	border-radius: 6px;

	@media (min-width: 768px) {
		min-height: 400px;
		max-height: 500px;
		width: calc(50% - 10px);
		${({ addDropShadow }) => !addDropShadow ? `margin: 0;` : `margin: 0 5px;
		box-shadow: 1px 1px #2928CE, 2px 2px #2928CE, 3px 3px #2928CE, 4px 4px #2928CE, 5px 5px #2928CE,
			6px 6px #2928CE, 7px 7px #2928CE, 8px 8px #2928CE, 9px 9px #2928CE, 10px 10px #2928CE,
			11px 11px #2928CE, 12px 12px #2928CE;`}
	}

	@media (min-width: 1024px) {
		min-height: 500px;
	}
`;

const Image = styled.img`
	max-width: 100%;
`;

const TextWrapper = styled.div`
	margin: 0 auto;
	text-align: center;
	height: 100%;
	padding: 0 20px;

	@media (min-width: 768px) {
		padding: 0 35px;
	}

	@media (min-width: 1024px) {
		font-size: 22px;
		line-height: 26px;
		max-width: 500px;
		margin: 30px auto 0;
	}

	p span {
		display: inline;
		background-color: #f6f6eb;
		font-size: 18px;
		line-height: 24px;
		color: #f6f6eb;
		background-color: #f83a11;
		font-family: gopher, sans-serif;
		font-weight: 500;
	}

	@media (min-width: 768px) {
		max-width: ${({ component }) => (component === 'HalfTile' ? 'none' : '60%')};
	}
`;

const LinkWrapper = styled.div`
	&:nth-child(2) {
		margin-left: 20px;
	}
`;

const Asset = styled.img`
	max-width: 75%;
	margin: 0 auto 10px;

	@media (min-width: 768px) {
		max-width: 350px;
	}

	@media (min-width: 1024px) {
		max-width: 500px;
	}
`;

const BodyWrapper = styled.div`
	@media (min-width: 1024px) {
		padding: 20px 80px 0;
	}

	@media (min-width: 1440px) {
		padding: 20px 160px 0;
	}
`;

const Tile = ({
	backgroundColour,
	component,
	body,
	header,
	primaryLink,
	secondaryLink,
	asset,
	secondaryAsset,
	addDropShadow,
}) => {
	return (
		<>
			{asset && !body ? (
				<ImageTile addDropShadow={addDropShadow} background={asset.file.url} />
			) : (
				<StyledTile component={component} backgroundColour={backgroundColour}>
					<TextWrapper component={component}>
						{secondaryAsset && <Asset src={secondaryAsset.file.url} alt="" />}
						{header && <RichText document={header.json} />}
						{body && (
							<BodyWrapper>
								<RichText document={body.json} />
							</BodyWrapper>
						)}
						{primaryLink && (
							<LinkWrapper>
								{primaryLink && <Link link={primaryLink} />}
								{secondaryLink && <Link link={secondaryLink} />}
							</LinkWrapper>
						)}
					</TextWrapper>
					{asset && <Image src={asset.file.url} />}
				</StyledTile>
			)}
		</>
	);
};

export default Tile;
