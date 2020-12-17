import React from "react";
import "./profile.css";

function NameBox({ avatar, name, id }) {
  return (
    <div className={"name-box"}>
      <span className={"user-avatar"}>
        <img src={avatar} alt={"logo"} />
      </span>
      <span className={"user-name"}>{name}</span>
      <span className={"user-id"}>#{id}</span>
    </div>
  );
}

export default NameBox;
