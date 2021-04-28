import React, { useState } from "react";
import swcLogo from "../images/swc-logo.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  background-color: midnightblue;
  color: cornflowerblue;
  font-family: sans-serif;
  width: 900px;
  padding: 40px;

  h2 {
    font-size: 64px;
  }

  a {
    font-size: 28px;
    color: aliceblue;
  }
`;

const Typography: React.FC = ({ children, ...props }) => (
  <h2 {...props}>{children}</h2>
);

const App = () => {
  const [state, setState] = useState(false);

  return (
    <Container>
      <Typography onClick={() => setState(!state)}>
        What is state?: {state.toString()}
      </Typography>

      <a href="/index.html">Home</a>
      <a href="/vue.html">Go to the Vue app</a>
      <a href="/svelte.html">Go to the Svelte app</a>
      <img src={swcLogo} alt="" width="800" />
    </Container>
  );
};

export default App;
