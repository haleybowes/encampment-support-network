import React from 'react';
import { useStaticQuery } from 'gatsby';

import DesktopNav from './DesktopNav';

const Nav = () => {
	const { contentfulNav }= useStaticQuery(graphql`
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

	return (
		<>
			<DesktopNav content={contentfulNav} />
		</>
	);
};

export default Nav;
