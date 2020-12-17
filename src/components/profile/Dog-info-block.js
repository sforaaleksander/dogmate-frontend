import React from "react";
import "./profile.css";

function DogInfoBlock() {
  return (
    <div className={"dog-info-block"}>
      <div className={"dog-description"}>name:</div>
      <div className={"dog-description"}>gender:</div>
      <div className={"dog-description"}>date of birth:</div>
      <div className={"dog-description"}>breed:</div>
      <div className={"dog-description"}>temper:</div>
      <div className={"dog-description"}>neutered:</div>
    </div>
  );
}

export default DogInfoBlock;
