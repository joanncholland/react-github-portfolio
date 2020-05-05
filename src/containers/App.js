import React from "react";
import Profile from "../containers/Profile";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";

const AppWrapper = styled.div`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
 `;

const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Profile />
    </AppWrapper>
  </>
);

export default App;
