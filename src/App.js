import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./index.css";
import { LoginContext } from "./components/common/avatar-menu/LoginContext";
import MainTemplate from "./components/common/MainTemplate";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    console.log("in logOut");
    localStorage.clear("token");
    setIsLoggedIn(false);
  };

  console.log("isLoggedIn = ", isLoggedIn);
  return (
    <>
      <LoginContext.Provider value={[logOut, setIsLoggedIn]}>
        {isLoggedIn ? (
          <MainTemplate />
        ) : (
          <Router>
            <Switch>
              <Route exact path={"/registration"}>
                <Registration />
              </Route>
              <Route path={"/"}>
                <Redirect to={"/"} />
                <Login />
              </Route>
            </Switch>
          </Router>
        )}
      </LoginContext.Provider>
    </>
  );
};

export default App;
