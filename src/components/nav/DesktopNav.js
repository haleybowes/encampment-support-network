import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const StyledNav = styled.nav`
	display: flex;
	margin-bottom: 100px;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	background-color: white;
	min-height: 85px;
	z-index: 1;
	margin: 0;
	padding: 10px 20px;

	@media (max-width: 768px) {
		display: none;
	}

	a {
		cursor: pointer;
	}
`;

const Logo = styled.div`
	position: absolute;
	right: 0;
	left: 0;
	display: flex;
	justify-content: center;

	img {
		max-width: 85px;
	}
`;

const StyledList = styled.ul`
	list-style-type: none;
	display: flex;
	z-index: 1;

	&:nth-of-type(1) {
		li {
			&:first-of-type {
				/* a {
					border: 1px solid #060b04;
					border-radius: 5px;
					color: #f6f6eb;
					background-color: #060b04;
				} */
				a {
					color: #060b04;
					letter-spacing: 0.5px;
					border-radius: 5px;
					font-weight: 500;
					padding: 15px 30px;
					border: 1px solid #060b04;
					box-shadow: 1px 1px #060b04, 2px 2px #060b04, 3px 3px #060b04, 4px 4px #060b04,
						5px 5px #060b04, 6px 6px #060b04;
					transition: 0.25s box-shadow, 0.25s transform;
					/* font-size: 20px; */

					&:hover {
						box-shadow: unset;
						transform: translate(0.3em, 0.2em);
					}
				}
			}

			a {
				font-size: 15px;
				color: #060b04;
				padding: 15px 30px;
				display: inline-block;
				text-align: center;
				transition: all ease-in-out 0.2s;
			}
		}
	}

	img {
		max-width: 40px;
		padding: 7px;
	}
`;

const DesktopNav = ({ content: { logoLink, socialLinks, textLinks } }) => {
	return (
		<StyledNav>
			{textLinks && (
				<StyledList>
					{textLinks.map((link) => (
						<li key={link.id}>
							<Link link={link} />
						</li>
					))}
				</StyledList>
			)}
			{logoLink && (
				<Logo>
					<Link link={logoLink} />
				</Logo>
			)}
			{socialLinks && (
				<StyledList>
					{socialLinks.map((link) => (
						<li key={link.id}>
							<Link link={link} />
						</li>
					))}
				</StyledList>
			)}
		</StyledNav>
	);
};

export default DesktopNav;
