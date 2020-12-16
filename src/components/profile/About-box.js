import React from "react";
import "./profile.css";

function AboutBox({ aboutContent }) {
  return (
    <>
      <div className={"about-header"}>About:</div>
      <div className={"about-content"}>{aboutContent}</div>
    </>
  );
}

export default AboutBox;
