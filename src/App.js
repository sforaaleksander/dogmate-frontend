import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/common/navigation-menu/Navigation-bar";
import React from "react";
import WalkBox from "./components/common/walk/Walk-box";

function App() {
  return (
    <Router>
      <div>
        <Route path="/">
          <h1>DOGMATE</h1>
          <NavigationBar />
          <WalkBox
            dog_name={"Zuzia"}
            time={"12-02-2020 14:54"}
            user_name={"Andrzej"}
            walk_area={"Bieżanów"}
            user_id={431}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
