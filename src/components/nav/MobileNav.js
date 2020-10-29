import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Link from '../Link';

const Nav = styled.div`
	background-color: #c89220;
	height: 80px;
	width: 100%;
	position: fixed;
	z-index: 201;
	top: 0;
	padding: 10px;
	display: flex;
	justify-content: space-between;

	@media (min-width: 769px) {
		display: none;
	}

	.hamburger-menu,
	.hamburger-menu:after,
	.hamburger-menu:before {
		width: 40px;
		height: 4px;
	}

	.hamburger-menu {
		position: relative;
		transform: translateY(25px);
		background: #010754;
		transition: all 0ms 200ms;
		border-radius: 6px;

		&.animate {
			background: rgba(255, 255, 255, 0);
		}
	}

	.hamburger-menu:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 10px;
		border-radius: 6px;
		background: #010754;
		transition: bottom 200ms 200ms cubic-bezier(0.23, 1, 0.32, 1),
			transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
	}

	.hamburger-menu:after {
		content: '';
		position: absolute;
		border-radius: 6px;
		left: 0;
		top: 10px;
		background: #010754;
		transition: top 200ms 200ms cubic-bezier(0.23, 1, 0.32, 1),
			transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
	}

	.hamburger-menu.animate:after {
		top: 0;
		transform: rotate(45deg);
		transition: top 200ms cubic-bezier(0.23, 1, 0.32, 1),
			transform 200ms 200ms cubic-bezier(0.23, 1, 0.32, 1);
	}

	.hamburger-menu.animate:before {
		bottom: 0;
		transform: rotate(-45deg);
		transition: bottom 200ms cubic-bezier(0.23, 1, 0.32, 1),
			transform 200ms 200ms cubic-bezier(0.23, 1, 0.32, 1);
	}
`;

const Burger = styled.button`
	width: 65px;
	height: 70px;
	display: flex;
	z-index: 202;
	background: transparent;
	border: none;

	&:hover {
		cursor: pointer;
	}
`;

const FixedMenu = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #c89220;
	position: fixed;
	z-index: 100;
	transform: translateY(${({ open }) => (open ? '0' : '-100%')});
	transition: transform 200ms ease-out;

	a {
		color: #010754;
		transition: color 200ms ease-out, background 200ms ease-out;

		&:hover,
		&:focus {
			background: #f83a11;
			color: #f6f6eb;
		}
	}

	@media (min-width: 769px) {
		display: none;
	}
`;

const Logo = styled.div`
	img {
		max-width: 90px;
	}
`;

const SocialLinks = styled.ul`
	display: flex;
	list-style-type: none;
	height: 100%;
	align-items: center;

	a {
		height: 100%;
		display: block;
		transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

		&:hover {
			transform: translateY(-2px);
			opacity: 0.8;
		}
	}

	li:last-of-type {
		margin-left: 10px;
	}

	img {
		width: 30px;
	}
`;

const StyledList = styled.ul`
	height: 100%;
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 80px;
	padding-bottom: 100px;

	li {
		margin-bottom: 20px;
		font-size: 24px;
	}
`;

const MobileNav = ({ content: { logoLink, socialLinks, textLinks } }) => {
	const [open, setOpened] = useState(false);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const handleKeyDown = (e) => {
		const focusableElements = document.querySelectorAll('.burger-menu, .mobile-nav a, .fixed-menu a');
		const firstFocusableElement = focusableElements[0];
		const lastFocusableElement = focusableElements[focusableElements.length - 1];

		console.log(focusableElements);
		if (e.code === 'Escape') {
			const burgerMenu = document.querySelector('.burger-menu');
			console.log(burgerMenu, 'getting here');
			setOpened(false);
			e.stopPropagation();
			burgerMenu.focus();
		}

		if (e.shiftKey) {
			if (document.activeElement === firstFocusableElement) {
				lastFocusableElement.focus();
				e.preventDefault();
			}
		} else if (document.activeElement === lastFocusableElement) {
			firstFocusableElement.focus();
			e.preventDefault();
		}
	};

	return (
		<>
			<Nav className="mobile-nav">
				<Burger className="burger-menu" onClick={() => setOpened(!open)}>
					<div className={`hamburger-menu ${open ? 'animate' : ''}`} />
				</Burger>
				{logoLink && (
					<Logo>
						<Link link={logoLink} />
					</Logo>
				)}
				{socialLinks && (
					<SocialLinks>
						{socialLinks.map((link) => (
							<li key={link.id}>
								<Link link={link} />
							</li>
						))}
					</SocialLinks>
				)}
			</Nav>
			<FixedMenu className="fixed-menu" open={open}>
				{textLinks && (
					<StyledList>
						{textLinks.map((link) => (
							<li key={link.id}>
								<Link link={link} />
							</li>
						))}
					</StyledList>
				)}
			</FixedMenu>
		</>
	);
};

export default MobileNav;
