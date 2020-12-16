import React from "react";
import NameBox from "./Name-box";
import AboutBox from "./About-box";
import DogBox from "./Dog-box";

function Profile({ user }) {
  const { avatar, name, id, about, dogs } = user;
  console.log("user profile");
  return (
    <>
      <div>test user profile</div>
      <NameBox avatar={avatar} name={name} id={id} />
      <AboutBox aboutContent={about} />
      <DogBox />
    </>
  );
}

export default Profile;
