import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import AvatarMenu from "./components/common/avatar-menu/AvatarMenu";
import { LoginContext } from "./components/common/avatar-menu/LoginContext";
import Header from "./components/common/header/Header";

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
      <h3>App</h3>
      <Router>
        <Switch>
          <LoginContext.Provider value={[logOut]}>
            <Route exact path={"/"}>
              <Header />
              <AvatarMenu />
            </Route>
          </LoginContext.Provider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
