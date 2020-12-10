import React from "react";
import NavigationItem from "./Navigation-item";
import SubmenuBar from "./Submenu-bar";
import "../../../index.css";
import home from "../../../img/home.js";
import dog from "../../../img/dog.js";
import map from "../../../img/map.js";
import friends from "../../../img/friends.js";
import messages from "../../../img/messages.js";
import { useState } from "react/cjs/react.production.min";
import NavigationItemSubmenu from "./Navigation-item-submenu";

function NavigationBar() {
  const [isWalksClicked, setWalksClicked] = useState(false);

  function clickWalks() {
    setWalksClicked(!isWalksClicked);
  }

  return (
    <div>
      <NavigationItem image={home} link_to={"/home"} text={"Home"} />
      <NavigationItemSubmenu image={dog} func={clickWalks} text={"Walks"} />
      <div>{isWalksClicked && <SubmenuBar />}</div>
      <NavigationItem image={map} link_to={"/map"} text={"Map"} />
      <NavigationItem image={friends} link_to={"/friends"} text={"Friends"} />
      <NavigationItem
        image={messages}
        link_to={"/messages"}
        text={"Messages"}
      />
    </div>
  );
}

export default NavigationBar;
