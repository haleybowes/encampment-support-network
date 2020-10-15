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
	/* background-color: #e3ce60; */
	margin: 0;
	/* -webkit-box-shadow: 0px 3px 5px 0px rgba(6, 11, 4, 0.24);
	-moz-box-shadow: 0px 3px 5px 0px rgba(6, 11, 4, 0.24);
	box-shadow: 0px 3px 5px 0px rgba(6, 11, 4, 0.24); */
	padding: 10px 20px;

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
					border: 1px solid #060b04;
					border-radius: 5px;
					color: #F6F6EB;
					background-color: #060b04;
				}
			}

			a {
				font-size: 15px;
				color: #060b04;
				padding: 15px 30px;
				display: inline-block;
				text-align: center;
				transition: all ease-in-out 0.2s;

				/* &:hover {
					background-color: #060b04;
					color: #f6f6eb;
				} */
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
