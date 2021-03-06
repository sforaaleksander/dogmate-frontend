import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./navigation.css";

SubmenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  link_to: PropTypes.string.isRequired,
};

function SubmenuItem({ text, link_to }) {
  return (
    <>
      <nav>
        <NavLink to={link_to} className={"brown"} activeClassName={"turquoise"}>
          <span className={"item-with-dot"}>
            <span className={"dot"}>•&nbsp;</span>
            <span className={"submenu-item"}>{text}</span>
          </span>
        </NavLink>
      </nav>
    </>
  );
}

export default SubmenuItem;
