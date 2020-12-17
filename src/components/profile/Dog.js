import "./profile.css";
import React from "react";
import DogInfoBlock from "./Dog-info-block";

function Dog({ dog }) {
  const { id, name, gender, dateOfBirth, breed, temper, isNeutered } = dog;
  return (
    <div className={"dog-info"}>
      <DogInfoBlock />
      <div className={"dog-data"}>
        <div>{name}</div>
        <div>{gender}</div>
        <div>{dateOfBirth}</div>
        <div>{breed.name}</div>
        <div>{temper.name}</div>
        <div>{isNeutered}</div>
      </div>
    </div>
  );
}

export default Dog;
