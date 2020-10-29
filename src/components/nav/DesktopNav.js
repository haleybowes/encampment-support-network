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
	background-color: #b35a00;
	background-color: #e3ce60;
	background-color: #c89220;
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
				a {
					color: #060b04;
					letter-spacing: 0.5px;
					border-radius: 5px;
					padding: 15px 30px;
					transition: 0.25s box-shadow, 0.25s transform;
					background-color: #c89220;
					border: 1px solid #010754;
					box-shadow: 1px 1px #f83a11, 2px 2px #f83a11, 3px 3px #f83a11, 4px 4px #f83a11,
						5px 5px #f83a11, 6px 6px #f83a11;
					color: #010754;

					&:hover,
					&:focus {
						box-shadow: unset;
						transform: translate(0.3em, 0.2em);
					}
				}
			}

			&:nth-of-type(2) {
				a {
					span {
						transition: color 200ms ease-out, background 200ms ease-out;

						&:hover,
						&:focus {
							background: #f83a11;
							color: #f6f6eb;
						}
					}
				}
			}

			a {
				font-size: 15px;
				color: #010754;
				padding: 15px 30px;
				display: inline-block;
				text-align: center;
			}
		}
	}

	&:nth-of-type(2) {
		a {
			display: block;
			transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

			&:hover,
			&:focus {
				transform: translateY(-2px);
				opacity: 0.8;
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
