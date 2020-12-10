import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import AvatarMenu from "./components/common/avatar-menu/AvatarMenu";
import { LoginContext } from "./components/common/avatar-menu/LoginContext";
import Header from "./components/common/header/Header";
import MainTemplate from "./components/common/MainTemplate";

// export const LoggedInContext = React.createContext();

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
        <Router>
          {isLoggedIn && <MainTemplate />}
          <h3>App</h3>
          <Switch>
            <Route exact path={"/"}>
              {/*<Header />*/}
              {/*<AvatarMenu />*/}
              Home
            </Route>
          </Switch>
        </Router>
      </LoginContext.Provider>
    </>
  );
};

export default App;
