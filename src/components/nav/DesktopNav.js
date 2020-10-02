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
	background-color: #e3ce60;
	margin: 0;
	-webkit-box-shadow: 0px 3px 5px 0px rgba(6, 11, 4, 0.24);
	-moz-box-shadow: 0px 3px 5px 0px rgba(6, 11, 4, 0.24);
	box-shadow: 0px 3px 5px 0px rgba(6, 11, 4, 0.24);
	padding: 10px 20px;
`;

const StyledList = styled.ul`
	list-style-type: none;
	display: flex;

	&:nth-of-type(1) {
		li {
			a {
				color: #060b04;
				border: 1px solid #060b04;
				border-radius: 5px;
				padding: 15px 30px;
				display: inline-block;
				text-align: center;
				transition: all ease-in-out 0.2s;

				&:hover {
					background-color: #060b04;
					color: #f6f6eb;
				}
			}
		}
	}

	&:nth-of-type(2) {
		img {
			max-width: 85px;
		}
	}

	&:nth-of-type(3) {
		img {
			max-width: 40px;
			padding: 7px;
		}
	}
`;

const DesktopNav = ({ content: { logoLink, socialLinks, textLinks } }) => {
	console.log(logoLink, socialLinks, textLinks);
	// console.log(content);
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
				<StyledList>
					<li>
						<Link link={logoLink} />
					</li>
				</StyledList>
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
