import React from "react";

function NameBox({ avatar, name, id }) {
  return (
    <>
      <span>{avatar}</span>
      <span>{name}</span>
      <span>{id}</span>
    </>
  );
}

export default NameBox;
