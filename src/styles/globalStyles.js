import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
	box-sizing: border-box;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	::before,
	::after {
	box-sizing: inherit;
	}

	body {
		margin: 0;
		padding: 0;
		/* background-color: #202020; */
		/* background-color: #E3CE60; */
		background-color: #010754;
		background-color: #A7C442;
		background-color: #C89220;
		/* background-color: #202020; */
		background-color: #CC7E1C;
		background-color: #C89220;
		/* background-color: #202020; */
		/* background-color: #F83A11; */
	}

	h1, h2, h3, p {
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		color: #060B04;
		color: #010754;
		/* color: #A7C442; */
		/* color: #F6F6EB; */
	}

	h3 {
		font-size: 1.5rem;
		line-height: 1.625rem;

		@media (min-width: 1024px) {
			/* font-size: 2rem; */
			/* line-height: 2.2rem; */
			font-size: 1.75rem;
			line-height: 1.875rem;
		}
	}

	p {
		font-size: 1rem;

		@media (min-width: 1024px) {
			font-size: 1.125rem;
			line-height: 1.5rem;
		}
	}

	h1, h2, h3 {
		font-family: gopher, sans-serif;
		font-weight: 500;
	}

	a {
		font-family: gopher, sans-serif;
		text-transform: uppercase;
		text-decoration: none;
		-webkit-font-smoothing: antialiased;

		@media (min-width: 1024px) {
			font-size: 1.125rem;
		}

		&:hover {
			cursor: pointer;
		}
	}

	p {
		font-family: proxima-nova, sans-serif;
	}
`;

export default GlobalStyle;
