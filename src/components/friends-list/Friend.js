import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Friend({ id, name, img, dogs }) {
  const defaultImg =
    "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
  const dogInfo = "Doesn't have a dog ;(";
  return (
    <div className={"friend"}>
      <NavLink to={`friends/${id}`}>
        <img
          className={"friend-avatar"}
          src={img || defaultImg}
          alt={name + "#" + id}
        />
      </NavLink>
      <span>{name}</span>
      {dogs.length !== 0 ? (
        dogs.map(({ name }, index) => {
          return <p key={index}>{name}</p>;
        })
      ) : (
        <p>{dogInfo}</p>
      )}
      <p>#{id}</p>
    </div>
  );
}

Friend.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dogs: PropTypes.array.isRequired,
};

export default Friend;
