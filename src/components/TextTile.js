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

	@media (min-width: 768px) {
		width: ${({ component }) => (component === 'FullTextTile' ? '100%' : '47%')};
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
	/**
 * ----------------------------------------
 * animation shadow-pop-br
 * ----------------------------------------
 */
	@-webkit-keyframes shadow-pop-br {
		0% {
			-webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
				0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
			box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
				0 0 #3e3e3e, 0 0 #3e3e3e;
			-webkit-transform: translateX(0) translateY(0);
			transform: translateX(0) translateY(0);
		}
		100% {
			-webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e,
				5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
			box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e,
				5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
			-webkit-transform: translateX(-8px) translateY(-8px);
			transform: translateX(-8px) translateY(-8px);
		}
	}
	@keyframes shadow-pop-br {
		0% {
			-webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
				0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
			box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e,
				0 0 #3e3e3e, 0 0 #3e3e3e;
			-webkit-transform: translateX(0) translateY(0);
			transform: translateX(0) translateY(0);
		}
		100% {
			-webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e,
				5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
			box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e,
				5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
			-webkit-transform: translateX(-8px) translateY(-8px);
			transform: translateX(-8px) translateY(-8px);
		}
	}

	a {
		color: #060b04;
		border: 1px solid #060b04;
		border-radius: 5px;
		padding: 15px 40px;
		display: inline-block;
		text-align: center;
		font-weight: 500;
		letter-spacing: 0.8px;
		/* transition: all ease-in-out 0.3s; */

		&:hover {
			-webkit-animation: shadow-pop-br 0.3s ease-in-out both;
			animation: shadow-pop-br 0.3s ease-in-out both;
		}
		/* box-shadow: 1px 1px #060b04, 2px 2px #060b04, 3px 3px #060b04, 4px 4px #060b04, 5px 5px #060b04,
			6px 6px #060b04, 7px 7px #060b04, 8px 8px #060b04; */
		/* transition: ease-in-out all 0.3s; */

		/* &:hover {
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
		} */
	}
`;

const Image = styled.img`
	max-width: 100%;
`;

const TextWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;

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
	margin: 25px 0 90px;
	display: flex;
	align-items: center;
	position: relative;

	a:nth-of-type(2) {
		margin-left: 25px;
	}
`;

const Asset = styled.img`
	max-width: 500px;
	margin: 0 auto 10px;
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
