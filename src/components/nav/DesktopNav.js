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
	background-color: #c89220;
	min-height: 85px;
	z-index: 1;
	margin: 0;
	padding: 10px 20px;

	@media (max-width: 1150px) {
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
		max-width: 120px;
	}
`;

const StyledList = styled.ul`
	list-style-type: none;
	display: flex;
	z-index: 1;

	&:nth-of-type(1) {
		li {
				a {
					padding: 15px 10px;
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

		a {
			display: block;
			transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

			&:hover,
			&:focus {
				opacity: 0.8;
			}
		}

	img {
		max-width: 40px;
		padding: 7px;
	}
`;

const DesktopNav = ({ navUnderline, content: { logoLink, socialLinks, textLinks } }) => {
	return (
		<StyledNav className={navUnderline}>
			{textLinks && (
				<StyledList>
					{textLinks.map((link) => (
						<li key={link.id}>
							<Link link={link} />
						</li>
					))}
				</StyledList>
			)}
			<div>
			{socialLinks && (
				<StyledList>
					{socialLinks.map((link) => (
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
			</div>
		</StyledNav>
	);
};

export default DesktopNav;
