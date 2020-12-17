import "./profile.css";
import React from "react";
import DogInfoBlock from "./Dog-info-block";

function Dog({ dog }) {
  const { name, gender, dateOfBirth, breed, temper, isNeutered } = dog;
  return (
    <div className={"dog-info"}>
      <DogInfoBlock />
      <div className={"dog-data"}>
        <div className={"dog-description"}>{name}</div>
        <div className={"dog-description"}>{gender ? "male" : "female"}</div>
        <div className={"dog-description"}>{dateOfBirth}</div>
        <div className={"dog-description"}>{breed.name}</div>
        <div className={"dog-description"}>{temper.name}</div>
        <div className={"dog-description"}>{isNeutered ? "yes" : "no"}</div>
      </div>
    </div>
  );
}

export default Dog;
