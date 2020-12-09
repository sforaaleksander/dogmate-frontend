import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./navigation.css";

NavigationItem.propTypes = {
  image: PropTypes.shape(PropTypes.object, PropTypes.isRequired),
  text: PropTypes.shape(PropTypes.string, PropTypes.isRequired),
  link_to: PropTypes.shape(PropTypes.string, PropTypes.isRequired),
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
