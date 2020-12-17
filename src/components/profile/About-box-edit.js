import React from "react";

function AboutBoxEdit({ aboutContent }) {
  function auto_grow() {
    let element = document.getElementById("about-edition");
    element.style.height = "5px";
    element.style.height = element.scrollHeight + "px";
  }

  return (
    <div>
      <div className={"about-header"}>About:</div>
      <textarea
        id={"about-edition"}
        className={"about-content-edit"}
        onInput={() => auto_grow()}
        placeholder={aboutContent}
      />
      <div>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default AboutBoxEdit;
