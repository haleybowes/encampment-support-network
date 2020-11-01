import React, { useEffect, useState } from 'react';
import { useStaticQuery } from 'gatsby';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {
	const { contentfulNav } = useStaticQuery(graphql`
		query NavQuery {
			contentfulNav {
				id
				textLinks {
					id
					linkText {
						json
					}
					image {
						file {
							url
						}
					}
					linkUrl
				}
				socialLinks {
					id
					image {
						file {
							url
						}
					}
					linkUrl
				}
				logoLink {
					id
					image {
						file {
							url
						}
					}
					linkUrl
				}
			}
		}
	`);

	const [navUnderline, setNavUnderline] = useState('');
	const handleUnderline = () => {
		const scrolled = document.scrollingElement.scrollTop;
		if (scrolled >= 120) {
			setNavUnderline('underline');
		} else {
			setNavUnderline('');
		}
	};

	useEffect(() => {
		document.addEventListener('scroll', handleUnderline);

		return () => {
			document.removeEventListener('scroll', handleUnderline);
		};
	}, []);

	return (
		<>
			<DesktopNav navUnderline={navUnderline} content={contentfulNav} />
			<MobileNav navUnderline={navUnderline} content={contentfulNav} />
		</>
	);
};

export default Nav;
