import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {Home} from './pages/Home';
import
  styled from 'styled-components';

// Scoped styles

const NavBar = styled.nav`
  height: 100%;
  background: palegreen;
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px 20px;
`

export const StyledLink = styled(Link)`
  padding: 20px 10px;
  &:hover {
    background: white;
  }
`;

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <PageContainer>
        <NavBar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
        </NavBar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </PageContainer>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
