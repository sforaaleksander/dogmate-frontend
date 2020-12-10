import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./navigation.css";

NavigationItem.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  link_to: PropTypes.string.isRequired,
};

function NavigationItem({ image, text, link_to }) {
  return (
    <>
      <nav>
        <NavLink to={link_to} className={"brown"} activeClassName={"turquoise"}>
          <div className={"link-icon"}>{image}</div>
          {text}
        </NavLink>
      </nav>
    </>
  );
}

export default NavigationItem;
