import
styled from 'styled-components';
import StyledLink from './App';

export const SectionTitle = styled.h2`
	font-size: 4em;
	font-weight: 600;
	margin: 0;

	// Controlled specificity
	color: black;

	// & {
	// 	color: blue;
	// }

	// && {
	// 	color: green !important;
	// }
`;

export const PageTitle = styled.h1`
	font-size: 5em;
	color: purple;
	font-weight: 700;
	margin-top: 0;

	${StyledLink}:hover & {
		color: blue;
	}
`;