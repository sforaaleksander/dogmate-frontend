import { useContext } from "react";
import "./avatarMenu.css";
import { Link, Redirect } from "react-router-dom";
import { LoginContext } from "./LoginContext";

const AvatarMenu = () => {
  const [logOut] = useContext(LoginContext);
  console.log("++++++++" + logOut);

  return (
    <div className="user-menu-bar">
      <Link to="/user-profile" className={"user-menu-link"}>
        My profile
      </Link>
      <Link to="/settings" className={"user-menu-link"}>
        Settings
      </Link>
      <Link to="/logout" className={"user-menu-link"} onClick={logOut}>
        Log out
      </Link>
    </div>
  );
};

export default AvatarMenu;
