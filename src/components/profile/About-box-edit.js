import React from "react";
import "./Profile";
import "../../index.css";
import { useEffect, useState, useContext } from "react";
import { AboutContext } from "./About-context";
import "./profile.css";

function AboutBoxEdit({ aboutContent }) {
  const [isChanged, setIsChanged] = useState(false);

  const unClickAbout = useContext(AboutContext)[1];

  useEffect(auto_grow, []);

  function auto_grow() {
    const aboutTextArea = document.getElementById("about-edition");
    aboutTextArea.style.height = "5px";
    aboutTextArea.style.height = aboutTextArea.scrollHeight + "px";
  }

  function activateSave() {
    setIsChanged(true);
  }

  return (
    <div>
      <div className={"about-header"}>About:</div>
      <textarea
        id={"about-edition"}
        className={"about-content-edit"}
        onInput={() => {
          auto_grow();
          activateSave();
        }}
        placeholder={aboutContent}
        defaultValue={aboutContent}
      />
      <div>
        <button className={"button"} type={"submit"} disabled={!isChanged}>
          Save
        </button>
        <button className={"button"} onClick={() => unClickAbout()}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AboutBoxEdit;
