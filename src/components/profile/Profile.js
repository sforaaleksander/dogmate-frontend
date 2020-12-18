import React from "react";
import { useState } from "react";
import { AboutContext } from "./About-context";
import NameBox from "./Name-box";
import AboutBox from "./About-box";
import AboutBoxEdit from "./About-box-edit";
import DogBox from "./Dog-box";
import "./profile.css";

function Profile({ user }) {
  const { avatar, name, id, about, dogs } = user;

  const [isAboutClicked, setIsAboutClicked] = useState(false);

  function clickAbout() {
    setIsAboutClicked(true);
    const aboutBox = document.getElementById("about-box");
    aboutBox.classList.toggle("point-me");
  }

  return (
    <>
      <AboutContext.Provider value={[isAboutClicked, setIsAboutClicked]}>
        <div className={"profile-container"}>
          <div>
            <NameBox avatar={avatar} name={name} id={id} />
          </div>
          <div
            id={"about-box"}
            className={"about-box point-me"}
            onClick={() => clickAbout()}
          >
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
      </AboutContext.Provider>
    </>
  );
}

export default Profile;
