import React, { useState } from "react";

import "./index.css";
import { LoginContext } from "./components/common/avatar-menu/LoginContext";
import MainTemplate from "./components/common/MainTemplate";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logOut = () => {
    console.log("in logOut");
    localStorage.clear("token");
    setIsLoggedIn(false);
  };

  console.log("isLoggedIn = ", isLoggedIn);
  return (
    <>
      <LoginContext.Provider value={[logOut]}>
        {isLoggedIn && <MainTemplate />}
        <h3>App</h3>
      </LoginContext.Provider>
    </>
  );
};

export default App;
