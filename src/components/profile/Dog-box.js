import React from "react";
import PropTypes from "prop-types";
import Dog from "./Dog";
import "./profile.css";

DogBox.propTypes = {
  dogs: PropTypes.array,
};

function DogBox({ dogs }) {
  console.log(dogs);
  return (
    <>
      <div className={"user-dog-list-header"}>My dogs:</div>
      <div className={"user-dog-list"}>
        {dogs.map((dog) => (
          <div className={"single-dog"}>
            <Dog dog={dog} key={dog.id} />
            <div className={"dog-box-line"}></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DogBox;
