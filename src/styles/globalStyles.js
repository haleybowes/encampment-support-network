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
		background-color: #C89220;
	}

	h1, h2, h3, p {
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		color: #010754;
	}

	h3 {
		font-size: 1.5rem;
		line-height: 1.625rem;

		@media (min-width: 1024px) {
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

	&.underline {
		border-bottom: 1px solid green;
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
