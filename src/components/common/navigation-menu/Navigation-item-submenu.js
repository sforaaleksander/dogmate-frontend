import React from "react";
import PropTypes from "prop-types";
import "./navigation.css";

NavigationItemSubmenu.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  openSubmenu: PropTypes.string.isRequired,
};

function NavigationItemSubmenu({ image, text, openSubmenu }) {
  return (
    <>
      <nav>
        <span onClick={openSubmenu} className={"brown menuItem"}>
          <div className={"link-icon"}>{image}</div>
          {text}
        </span>
      </nav>
    </>
  );
}

export default NavigationItemSubmenu;
