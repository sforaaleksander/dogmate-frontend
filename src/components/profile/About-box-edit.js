import React from "react";

function AboutBoxEdit({ aboutContent }) {
  return (
    <div>
      <div className={"about-header"}>About:</div>
      <input className={"about-content"} placeholder={aboutContent} />
      <button>Save</button>
    </div>
  );
}

export default AboutBoxEdit;
