import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/common/navigation-menu/Navigation-bar";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Route path="/">
          <h1>DOGMATE</h1>
          <NavigationBar />
        </Route>
      </div>
    </Router>
  );
}

export default App;
