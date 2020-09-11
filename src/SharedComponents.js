import
styled from 'styled-components';
import {
	SectionTitle,
	PageTitle
} from './Typography';

// increased semantic html
// extendable styles
export const Page = styled.article`
	display: flex;
	align-items: center;
	flex: 1;
	padding: 50px 20px;
	flex-direction: column;
`;

export const Grid = styled.section`
	display: grid;
	grid-template-columns: 20% auto 20%;
	width: 100%;
	grid-template-columns: ${props => (props.one && '100%') || (props.two && '50% 50%') || (props.three && '20% auto 20%') || (props.four && '15% auto auto 15%')};
	height: 100%;
`;
const randomColorArray = ['#FFA69E', '#FAF3DD', '#B8F2E6', '#AED9E0', '#5E6472']
export const GridSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${props => randomColorArray[props.number]};
	&:hover {
    	background-color: ${props => `${randomColorArray[props.number]}60`};
	  }
	&:hover ${SectionTitle} {
		color: white;
		${PageTitle} {
			color: yellow;
		}
	}
`;

export const Button = styled.button`
	border: 1px solid blue;
	background-color: lightblue;
	color: white;
	font-weight: 600;
	font-size: 2em;
`;
