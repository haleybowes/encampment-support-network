import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
