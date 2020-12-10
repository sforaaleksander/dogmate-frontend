import Header from "./header/Header";
// import Home from "./home/Home";
// import MainNavigation from "./navigation/MainNavigation";
import AvatarMenu from "./avatar-menu/AvatarMenu";
import "../../index.css";
import "./mainTemplate.css";
import { useState } from "react";

export default function MainTemplate() {
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);

  function changeIsAvatarClicked() {
    setIsAvatarClicked(!isAvatarClicked);
  }

  return (
    <div>
      <div className="main-header brown-background">
        <Header changeIsAvatarClicked={changeIsAvatarClicked} />
      </div>
      <div className="main-container">
        <div className="left-menu">MainNavigation /></div>
        <div className="content-container">Home /></div>
        <div className="right-container">
          {isAvatarClicked && <AvatarMenu />}
        </div>
      </div>
    </div>
  );
}
