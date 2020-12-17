import React from "react";
import { useEffect, useState } from "react";
import "./profile.css";

function AboutBoxEdit({ aboutContent }) {
  const [isChanged, setIsChanged] = useState(false);

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
        <button type={"submit"} disabled={!isChanged}>
          Save
        </button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default AboutBoxEdit;
