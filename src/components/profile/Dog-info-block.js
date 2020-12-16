import React from "react";
import "./profile.css";

function DogInfoBlock() {
  return (
    <div className={"dog-info-block"}>
      <div>name:</div>
      <div>gender:</div>
      <div>date of birth:</div>
      <div>breed:</div>
      <div>temper:</div>
      <div>neutered:</div>
    </div>
  );
}

export default DogInfoBlock;
