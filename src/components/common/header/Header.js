import "./header.css";
import PropTypes from "prop-types";

export default function Header({ changeIsAvatarClicked }) {
  return (
    <header>
      <div className="logo">DOGMATE</div>
      <div className="main-avatar yellow" onClick={changeIsAvatarClicked}>
        <span>A</span>
      </div>
    </header>
  );
}

Header.propTypes = {
  changeIsAvatarClicked: PropTypes.func.isRequired,
};
