import React from "react";
import Dog from "./Dog";
import "./profile.css";

function DogBox({ dogs }) {
  return (
    <>
      <div className={"user-dog-list-header"}>My dogs:</div>
      <div className={"user-dog-list"}>
        {dogs.map((dogDetails) => (
          <Dog dog={dogDetails} />
        ))}
      </div>
    </>
  );
}

export default DogBox;
