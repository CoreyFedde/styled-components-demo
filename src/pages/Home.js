import React from "react";
import
styled from 'styled-components';
import {
  Page,
  Grid,
  GridSection,
  Button
} from '../SharedComponents';
import {
  PageTitle,
  SectionTitle
} from '../Typography';

const StyledLink = Button.withComponent('a')

const SpecificButton = styled(Button)`
background-color: lightgreen;
border: 1px solid green;
`
const StyledGridSection = styled(GridSection)`
background-color: red;
`;

const David = styled.article `
  color: yellow;
  border: 10px solid purple;
  background: ${props => props.temperature === 'cold' ? 'blue' : 'red'};
`;

const InterviewDavid = styled(David)`
  color: black;
  border: 1px solid black;
`.withComponent(Button);

const CoolInput = styled.input.attrs({
  type: "text",
  placeholder: "Type in me"
})`background: lightblue; color: white;`;

export const Home = () => {
  return (
  <Page>
    <PageTitle>Home</PageTitle>
    <David temperature='cold'>I sleep 18 hours a day</David>
    <InterviewDavid temperature='cold'>I am interviewing</InterviewDavid>
    <Grid four>
      <StyledGridSection number={1}><SectionTitle>Section</SectionTitle><CoolInput /></StyledGridSection>
      <GridSection number={4}><SectionTitle>Section</SectionTitle><StyledLink href="https://www.youtube.com">Am I A Link Or A Button?</StyledLink></GridSection>
      <GridSection number={3}><SectionTitle>Section</SectionTitle><Button onClick={() => alert('Im a styled button')}>Am I A Link Or A Button?</Button></GridSection>
      <GridSection number={4}><SectionTitle>Section</SectionTitle><SpecificButton onClick={() => alert('Im a styled button that extends your styled button')}>Am I A Link Or A Button?</SpecificButton></GridSection>
    </Grid>
    
  </Page>)
};

