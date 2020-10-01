import React from 'react';
import styled from 'styled-components';

import RichText from '../components/RichText';
import Link from '../components/Link';

const StyledLink = styled(Link)`
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
`;

const StyledTile = styled.div`
	background-color: ${({ backgroundColour }) => backgroundColour};
	margin: 5px;
	border: 1px solid #060b04;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;

	@media (min-width: 768px) {
		width: ${({ component }) => (component === 'HalfTile' ? 'calc(50% - 10px)' : '100%')};
	}

	h3 {
		&:last-of-type {
			margin-bottom: 10px;
		}
	}

	p {
		margin-bottom: 12px;
	}

	a {
		&:last-of-type {
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
	margin: 5px;
	border: 1px solid #060b04;
	border-radius: 5px;
	min-height: 320px;

	@media (min-width: 768px) {
		min-height: 400px;
		max-width: calc(50% - 10px);
	}
`;

const Image = styled.img`
	max-width: 100%;
`;

const TextWrapper = styled.div`
	margin: 0 auto;
	padding: 32px 32px 0 32px;

	@media (min-width: 768px) {
		max-width: ${({ component }) => (component === 'HalfTile' ? 'none' : '75%')};
	}

	@media (min-width: 1024px) {
		padding: 70px 70px 0 70px;
	}
`;

const LinkWrapper = styled.div`
	&:nth-child(2) {
		margin-left: 20px;
	}
`;

const Tile = ({ backgroundColour, component, body, header, primaryLink, secondaryLink, asset }) => {
	return (
		<>
			{asset && !header ? (
				<ImageTile background={asset.file.url} />
			) : (
				<StyledTile component={component} backgroundColour={backgroundColour}>
					<TextWrapper component={component}>
						{header && <RichText document={header.json} />}
						{body && <RichText document={body.json} />}
						{primaryLink && (
							<LinkWrapper>
								{primaryLink && <StyledLink link={primaryLink} />}
								{secondaryLink && <StyledLink link={secondaryLink} />}
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
