import React from "react";
import { useEffect } from "react";
import "./profile.css";

function AboutBoxEdit({ aboutContent }) {
  console.log(aboutContent.length);

  useEffect(auto_grow, []);

  function auto_grow() {
    const aboutTextArea = document.getElementById("about-edition");
    aboutTextArea.style.height = "5px";
    aboutTextArea.style.height = aboutTextArea.scrollHeight + "px";
  }

  return (
    <div>
      <div className={"about-header"}>About:</div>
      <textarea
        id={"about-edition"}
        className={"about-content-edit"}
        onInput={() => auto_grow()}
        placeholder={aboutContent}
        defaultValue={aboutContent}
      />
      <div>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default AboutBoxEdit;
