import Header from "./header/Header";
import AvatarMenu from "./avatar-menu/AvatarMenu";
import "../../index.css";
import "./mainTemplate.css";
import { useState } from "react";
import NavigationBar from "./navigation-menu/Navigation-bar";
import Friends from "../friends-list/Friends";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessagesOverview from "../messages/MessagesOverview";
import Conversation from "../conversation/Conversation";
import Map from "../map/Map";

export default function MainTemplate() {
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);

  function changeIsAvatarClicked() {
    setIsAvatarClicked(!isAvatarClicked);
  }

  return (
    <Router>
      <div className="main-header brown-background">
        <Header changeIsAvatarClicked={changeIsAvatarClicked} />
      </div>
      <div className="main-container">
        <div className="left-menu">
          <NavigationBar />
        </div>
        <div className="content-container">
          <Switch>
            <Route exact path={"/"}>
              Home
            </Route>
            <Route path={"/friends"}>
              <Friends />
            </Route>
            <Route exact path={"/messages"}>
              <MessagesOverview />
            </Route>
            <Route exact path={"/conversations/:id"}>
              <Conversation />
            </Route>
            <Route exact path={"/map"}>
              <Map />
            </Route>
          </Switch>
        </div>
        <div className="right-container">
          {isAvatarClicked && <AvatarMenu />}
        </div>
      </div>
    </Router>
  );
}
