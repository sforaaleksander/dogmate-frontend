import React from "react";
import { data } from "./test-friend-data";
import Friend from "./Friend";
import "./friends.css";
import "../../index.css";

function Friends() {
  //todo fetch data from api
  return (
    <div className={"container"}>
      <div className={"search-friend"}>
        <input placeholder={"Find your friend"} autoFocus={true} />
      </div>
      <div className={"friends-grid"}>
        {data.map((user) => {
          return <Friend key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
}

export default Friends;
