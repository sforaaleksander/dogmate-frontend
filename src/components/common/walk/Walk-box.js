import React from "react";
import PropTypes from "prop-types";
import "./walk-box.css";

WalkBox.propTypes = {
  user_name: PropTypes.string,
  user_id: PropTypes.number,
  walk_area: PropTypes.string,
  time: PropTypes.string.isRequired,
  dog_name: PropTypes.string.isRequired,
};

WalkBox.prototype.default = {
  user_name: undefined,
  user_id: undefined,
  walk_area: undefined,
  time: new Date().getTime().toString(),
};

function WalkBox({ user_name, user_id, walk_area, time, dog_name }) {
  return (
    <>
      <div className={"walk-wrapper"}>
        <div className={"info"}>
          <div className={"user-info"}>
            <span className={"user-name"}>{user_name}</span>
            <span className={"user-id"}>#{user_id}</span>
            <span className={"dot"}>•</span>
            <span className={"dog-name"}>{dog_name}</span>
          </div>
          <div>{walk_area}</div>
          <div>{time}</div>
        </div>
        <div className={"image-box"}>
          <img
            src={
              "https://miro.medium.com/max/2400/1*cX1Ve9_YQ2fQwjgA04yZ-g.png"
            }
            alt={"map"}
          />
        </div>
      </div>
    </>
  );
}

export default WalkBox;
