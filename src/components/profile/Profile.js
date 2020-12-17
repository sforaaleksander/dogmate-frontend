import React from "react";
import { useState } from "react";
import NameBox from "./Name-box";
import AboutBox from "./About-box";
import AboutBoxEdit from "./About-box-edit";
import DogBox from "./Dog-box";
import "./profile.css";

function Profile({ user }) {
  const { avatar, name, id, about, dogs } = user;

  const [isAboutClicked, setIsAboutClicked] = useState(false);

  function clickAbout() {
    setIsAboutClicked(!isAboutClicked);
  }

  return (
    <div className={"profile-container"}>
      <div>
        <NameBox avatar={avatar} name={name} id={id} />
      </div>
      <div className={"about-box"} onClick={() => clickAbout()}>
        {isAboutClicked ? (
          <AboutBoxEdit aboutContent={about} />
        ) : (
          <AboutBox aboutContent={about} />
        )}
      </div>
      <div>
        <DogBox dogs={dogs} />
      </div>
    </div>
  );
}

export default Profile;
