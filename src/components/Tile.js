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
	width: 100%;

	@media (min-width: 768px) {
		width: ${({ component }) => (component === 'HalfTile' ? '50%' : '100%')};
	}

	@media (min-width: 1024px) {
		padding: 100px 0;
	}

	li {
    margin-left: 20px
	}

	h1 {
		font-size: 40px;
		font-weight: 600;
		text-align: center;
		line-height: 38px;
		margin-bottom: 16px;
	}

	h2 {
		font-size: 32px;
		line-height: 32px;
	}

	h3 {
		&:last-of-type {
			margin-bottom: 10px;
		}
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

		&:hover {
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

	@media (min-width: 768px) {
		min-height: 400px;
		width: 47%;
		margin: 0 20px;
		border-radius: 6px;
		box-shadow: 1px 1px #060b04, 2px 2px #060b04, 3px 3px #060b04, 4px 4px #060b04, 5px 5px #060b04,
			6px 6px #060b04, 7px 7px #060b04, 8px 8px #060b04, 9px 9px #060b04, 10px 10px #060b04,
			11px 11px #060b04, 12px 12px #060b04;
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;

	h3 {
		font-weight: 100;
		font-size: 22px;
		text-align: center;
	}

	@media (min-width: 768px) {
		max-width: ${({ component }) => (component === 'HalfTile' ? 'none' : '50%')};
	}

	@media (min-width: 1024px) {
		/* padding: 70px 70px 0 70px; */
	}
`;

const LinkWrapper = styled.div`
	&:nth-child(2) {
		margin-left: 20px;
	}
`;

const Asset = styled.img`
	max-width: 500px;
	margin: 0 auto 10px;
`;

const Tile = ({
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
	return (
		<>
			{asset && !body ? (
				<ImageTile background={asset.file.url} />
			) : (
				<StyledTile component={component} backgroundColour={backgroundColour}>
					<TextWrapper component={component}>
						{secondaryAsset && <Asset src={secondaryAsset.file.url} alt="" />}
						{header && <RichText document={header.json} />}
						{body && <RichText document={body.json} />}
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
