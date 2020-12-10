import { useContext } from "react";
import "./avatarMenu.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { LoginContext } from "./LoginContext";

const AvatarMenu = () => {
  const [logOut] = useContext(LoginContext);

  return (
    <div className="user-menu-bar">
      <Router>
        <Link to="/user-profile" className={"user-menu-link"}>
          My profile
        </Link>
        <Link to="/settings" className={"user-menu-link"}>
          Settings
        </Link>
        <Link to="/" className={"user-menu-link"} onClick={logOut}>
          Log out
        </Link>
      </Router>
    </div>
  );
};

export default AvatarMenu;
