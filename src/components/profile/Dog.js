import "./profile.css";
import React from "react";
import DogInfoBlock from "./Dog-info-block";

function Dog({ dog }) {
  const { name, gender, dateOfBirth, breed, temper, isNeutered } = dog;
  return (
    <div className={"dog-info"}>
      {/*<DogInfoBlock />*/}
      <div className={"dog-data"}>
        <div className={"dog-description"}>
          <span className={"description-title"}> name:</span>
          {name}
        </div>
        <div className={"dog-description"}>
          <span className={"description-title"}> gender:</span>
          {gender ? "male" : "female"}
        </div>
        <div className={"dog-description"}>
          <span className={"description-title"}> date of birth:</span>
          {dateOfBirth}
        </div>
        <div className={"dog-description"}>
          <span className={"description-title"}> breed:</span>
          {breed.name}
        </div>
        <div className={"dog-description"}>
          <span className={"description-title"}> temper:</span>
          {temper.name}
        </div>
        <div className={"dog-description"}>
          <span className={"description-title"}> neutered:</span>
          {isNeutered ? "yes" : "no"}
        </div>
      </div>
    </div>
  );
}

export default Dog;
