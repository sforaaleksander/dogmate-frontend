import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./navigation.css";

NavigationItemSubmenu.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  openSubmenu: PropTypes.func.isRequired,
};

function NavigationItemSubmenu({ image, text, openSubmenu }) {
  return (
    <>
      <nav>
        <span
          onClick={openSubmenu}
          className={"navigation-item-submenu brown menuItem"}
        >
          <div className={"link-icon"}>{image}</div>
          {text}
        </span>
      </nav>
    </>
  );
}

export default NavigationItemSubmenu;
