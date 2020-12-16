import React from "react";

function AboutBox({ aboutContent }) {
  return (
    <>
      <div className={"about-title"}>About:</div>
      <div className={"about-content"}>{aboutContent}</div>
    </>
  );
}

export default AboutBox;
