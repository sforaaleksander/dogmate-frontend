import "./profile.css";
import React from "react";

function Dog({ dog }) {
  const { name, gender, dateOfBirth, breed, temper, isNeutered } = dog;
  return (
    <div className={"dog-info"}>
      <div className={"dog-data"}>
        <div className={"dog-description"}>
          <div className={"description-title"}> name:</div>
          <div className={"description-content"}> {name}</div>
        </div>
        <div className={"dog-description"}>
          <div className={"description-title"}> gender:</div>
          <div className={"description-content"}>
            {" "}
            {gender ? "male" : "female"}
          </div>
        </div>
        <div className={"dog-description"}>
          <div className={"description-title"}> date of birth:</div>
          <div className={"description-content"}> {dateOfBirth}</div>
        </div>
        <div className={"dog-description"}>
          <div className={"description-title"}> breed:</div>
          <div className={"description-content"}> {breed.name}</div>
        </div>
        <div className={"dog-description"}>
          <div className={"description-title"}> temper:</div>
          <div className={"description-content"}> {temper.name}</div>
        </div>
        <div className={"dog-description"}>
          <div className={"description-title"}> neutered:</div>
          <div className={"description-content"}>
            {" "}
            {isNeutered ? "yes" : "no"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dog;
