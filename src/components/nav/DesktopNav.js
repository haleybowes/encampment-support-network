import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const StyledNav = styled.nav`
	margin-bottom: 100px;
`;

const StyledList = styled.ul`
	position: fixed;
	top: 0;
	list-style-type: none;
	background-color: #e3ce60;
	display: flex;
	width: 100%;
	align-items: center;
	margin: 0;
	-webkit-box-shadow: 0px 3px 5px 0px rgba(6, 11, 4, 0.24);
	-moz-box-shadow: 0px 3px 5px 0px rgba(6, 11, 4, 0.24);
	box-shadow: 0px 3px 5px 0px rgba(6, 11, 4, 0.24);
	padding: 10px 20px;

	li {
		a {
			color: #060b04;
		}

		/* &:nth-of-type(2), */
		&:nth-of-type(1) {
			a {
				margin-right: 15px;
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

		&:nth-of-type(3) {
			img {
				max-width: 90px;
			}
		}

		&:nth-of-type(4),
		&:nth-of-type(5) {
			img {
				max-width: 40px;
				padding: 7px;
			}
		}
	}
`;

const DesktopNav = ({ content }) => {
	console.log(content);
	return (
		<StyledNav>
			<StyledList>
				{content.map((item) => (
					<li>
						<Link link={item} />
					</li>
				))}
			</StyledList>
		</StyledNav>
	);
};

export default DesktopNav;
