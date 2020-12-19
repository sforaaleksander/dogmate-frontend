import React from "react";
import PropTypes from "prop-types";
import Dog from "./Dog";
import DogEdit from "./Dog-edit";
import "./profile.css";

DogBox.propTypes = {
  dogs: PropTypes.array,
};

function isNotLastElement(id, dogs) {
  return dogs.length + 1 !== id;
}

function DogBox({ dogs }) {
  return (
    <div className={"user-dog-list-box"}>
      <div className={"user-dog-list-header"}>My dogs:</div>
      <div className={"user-dog-list"}>
        {dogs.map((dog) => (
          <div className={"single-dog"}>
            <DogEdit dog={dog} key={dog.id} />
            {isNotLastElement(dog.id, dogs) && (
              <div className={"dog-box-line"} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogBox;
