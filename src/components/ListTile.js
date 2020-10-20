import React from 'react';
import styled from 'styled-components';
import RichText from '../components/RichText';

const Tile = styled.section`
	width: 100%;
	padding-top: 100px;

	ul {
		margin-left: 20px;
		list-style-type: circle;
		padding-bottom: 100px;

		p {
			font-weight: 100;
			padding-left: 10px;
		}
	}
`;

const TextWrapper = styled.div`
	max-width: 70%;
	margin: 0 auto;

	@media (min-width: 1440px) {
		max-width: 50%;
	}

	p:empty {
		display: none;
	}

	h1 {
		font-size: 40px;
		font-weight: 600;
		text-align: center;
		line-height: 38px;
		margin-bottom: 16px;
		margin-bottom: 32px;
	}

	p {
		font-family: gopher, sans-serif;
		font-weight: 500;
		font-size: 20px;
		margin-bottom: 20px;
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
