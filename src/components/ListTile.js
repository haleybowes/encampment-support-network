import React from 'react';
import styled from 'styled-components';
import RichText from '../components/RichText';

const Tile = styled.section`
	width: 100%;
	padding: 50px 20px 0;

	@media (min-width: 768px) {
		padding-top: 100px;
	}

	ul {
		margin-left: 20px;
		list-style-type: circle;
		padding-bottom: 50px;

		@media (min-width: 768px) {
			padding-bottom: 100px;
		}

		p {
			font-weight: 100;

			@media (min-width: 768px) {
				padding-left: 10px;
			}
		}
	}
`;

const TextWrapper = styled.div`
	margin: 0 auto;

	@media (min-width: 768px) {
		max-width: 70%;
	}

	@media (min-width: 1440px) {
		max-width: 50%;
	}

	p:empty {
		display: none;
	}

	h1 {
		font-size: 26px;
		font-weight: 600;
		text-align: center;
		line-height: 26px;
		margin-bottom: 16px;

		@media(min-width: 768px) {
			margin-bottom: 32px;
		}

		@media (min-width: 1024px) {
			font-size: 40px;
			line-height: 38px;
			
		}
	}

	p {
		font-family: gopher, sans-serif;
		font-weight: 500;
		margin-bottom: 10px;

		@media (min-width: 1024px) {
			font-size: 20px;
			margin-bottom: 20px;
		}
	}
`;

const ListTile = ({ body, header }) => {
	return (
		<Tile>
			<TextWrapper>
				{header && <RichText document={header.json} />}
				{body && <RichText document={body.json} />}
			</TextWrapper>
		</Tile>
	);
};

export default ListTile;
