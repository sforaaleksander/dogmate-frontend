import React from "react";
import "./profile.css";

function NameBox({ avatar, name, id }) {
  console.log("name & id:" + name, id);
  return (
    <>
      <span className={"user-avatar"}>
        <img src={avatar} alt={"logo"} />
      </span>
      <span className={"user-name"}>{name}</span>
      <span className={"user-id"}>#{id}</span>
    </>
  );
}

export default NameBox;
