import React, { useContext } from "react";
import "./avatarMenu.css";
import { NavLink } from "react-router-dom";
import { LoginContext } from "./LoginContext";

const AvatarMenu = () => {
  const [logOut] = useContext(LoginContext);

  return (
    <div className="user-menu-bar">
      <NavLink to="/user-profile" className={"user-menu-link"}>
        My profile
      </NavLink>
      <NavLink to="/settings" className={"user-menu-link"}>
        Settings
      </NavLink>
      <NavLink to="/" className={"user-menu-link"} onClick={logOut}>
        Log out
      </NavLink>
    </div>
  );
};

export default AvatarMenu;
