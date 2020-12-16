import "./profile.css";
import React from "react";
import DogInfoBlock from "./Dog-info-block";

function Dog(props) {
  const {
    id,
    name,
    gender,
    dateOfBirth,
    breed,
    temper,
    isNeutered,
  } = props.dog;
  return (
    <div className={"dog-info"}>
      <DogInfoBlock />
      <div className={"dog-data"} key={id}>
        <div>{name}</div>
        <div>{gender}</div>
        <div>{dateOfBirth}</div>
        <div>{breed}</div>
        <div>{temper}</div>
        <div>{isNeutered}</div>
      </div>
    </div>
  );
}

export default Dog;
