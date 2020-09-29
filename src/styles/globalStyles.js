import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
	box-sizing: border-box;
	}

	::before,
	::after {
	box-sizing: inherit;
	}

	body {
		margin: 0;
		padding: 0;
	}

	h1, h2, h3, p {
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		color: #FEFEFE;
	}

	h3 {
		font-size: 2rem;
		/* font-weight: bolder; */
		line-height: 2.2rem;
	}

	p {
		font-size: 1.125rem;
		line-height: 1.5rem;
	}

	h1, h2, h3, a {
		font-family: gopher, sans-serif;
		font-weight: 500;
	}

	a {
		text-transform: uppercase;
		text-decoration: none;
		-webkit-font-smoothing: antialiased;
	}

	p {
		font-family: proxima-nova, sans-serif;
	}
`;

export default GlobalStyle;
