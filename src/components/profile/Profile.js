import React from "react";
import NameBox from "./Name-box";
import AboutBox from "./About-box";
import DogBox from "./Dog-box";
import "./profile.css";

function Profile({ user }) {
  const { avatar, name, id, about, dogs } = user;
  console.log("user profile");
  return (
    <div className={"profile-container"}>
      <div>
        <NameBox avatar={avatar} name={name} id={id} />
      </div>
      <div>
        <AboutBox aboutContent={about} />
      </div>
      <div>
        <DogBox dogs={dogs} />
      </div>
    </div>
  );
}

export default Profile;
