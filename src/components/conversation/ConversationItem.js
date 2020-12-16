import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./conversation.css";

function ConversationItem({ data, isMine }) {
  const defaultImg =
    "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
  let id = data.sender.id;
  let avatar = data.sender.avatar;
  let justify;
  let fill;

  if (isMine) {
    justify = "right-message";
    fill = "turquoise-fill";
  } else {
    justify = "left-message";
    fill = "grey-fill";
  }

  return (
    // todo refactor img to links to profiles
    <div className={`item ${justify}`}>
      {/*<NavLink to={`friends/${id}`}>*/}
      {isMine || (
        <img
          className={"conversations-friend-avatar"}
          src={avatar || defaultImg}
          alt={"#" + id}
        />
      )}
      {/*</NavLink>*/}
      <div className={`message-content ${fill}`}>
        <p>{data.content}</p>
      </div>
      {isMine && (
        <img
          className={"conversations-friend-avatar"}
          src={avatar || defaultImg}
          alt={"#" + id}
        />
      )}
    </div>
  );
}

ConversationItem.propTypes = {};

export default ConversationItem;
