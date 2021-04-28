import React, { useState } from "react";
import swcLogo from "../images/swc-logo.svg";

const App = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <h2 onClick={() => setState(!state)}>
        What is state?: {state.toString()}
      </h2>
      <img src={swcLogo} alt="" width="800" />
    </div>
  );
};

export default App;
