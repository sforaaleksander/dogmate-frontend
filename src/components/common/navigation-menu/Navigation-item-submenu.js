import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./navigation.css";

NavigationItemSubmenu.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  func: PropTypes.string.isRequired,
};

function NavigationItemSubmenu({ image, text, func }) {
  return (
    <>
      <nav>
        <div onClick={func} className={"brown"}>
          <div className={"link-icon"}>{image}</div>
          {text}
        </div>
      </nav>
    </>
  );
}

export default NavigationItemSubmenu;
