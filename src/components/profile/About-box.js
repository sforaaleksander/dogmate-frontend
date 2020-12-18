import React from "react";
import { useContext } from "react";
import "./profile.css";
import { AboutContext } from "./About-context";

function AboutBox({ aboutContent }) {
  const clickAbout = useContext(AboutContext)[0];

  return (
    <>
      <div className={"about-header"}>About:</div>
      <div className={"about-content point-me"} onClick={() => clickAbout()}>
        {aboutContent}
      </div>
    </>
  );
}

export default AboutBox;
