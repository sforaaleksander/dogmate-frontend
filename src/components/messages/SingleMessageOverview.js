import React from 'react';
import {NavLink} from "react-router-dom";
import './messages.css';

function displayDate(date) {
    const today = new Date();
    let month =  ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let parsedDate = new Date(date);
    let checkIfDateMatchToday = parsedDate.getDay() === today.getDay() &&
        parsedDate.getMonth() === today.getMonth() &&
        parsedDate.getFullYear() === today.getFullYear();
    if (checkIfDateMatchToday){
        return parsedDate.getHours() + ":" +  parsedDate.getMinutes();
    }
    return month[parsedDate.getMonth()] + " " +  parsedDate.getUTCDate();
}

function displayMessage(lastMessage) {
    return lastMessage.length > 50 ? lastMessage.slice(0, 50) + "..." : lastMessage;
}

function displayDogs(dogs) {
    const dogInfo = "Doesn't have a dog ;(";
    return dogs.length !== 0
        ? dogs.map(({name}, index) => {
            return (index ? ', ' : '') + name;
        })
        : dogInfo;
}

function SingleMessageOverview({id, name, img, dogs, lastMessage, date}) {
    const defaultImg =
        "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
    return (
        <div className={"message-overview-container"}>
            <div className="avatar">
                <NavLink to={`friends/${id}`}>
                    <img
                        className={"friend-avatar"}
                        src={img || defaultImg}
                        alt={name + "#" + id}
                    />
                </NavLink>
            </div>
            <div className="message-details">
                <NavLink to={`conversations/${id}`}>
                    <strong className={"message-from"}>{name}</strong>
                    <span className={"user-id"}>&nbsp;#{id}</span>
                    <p className={"user-dogs"}>
                        {displayDogs(dogs)}
                    </p>
                    <div className={"message-wrapper"}>
                        <p className={"user-message"}>{displayMessage(lastMessage)}</p>
                        <p className={"dot-separator"}>·</p>
                        <p className={"user-message-date"}>{displayDate(date)}</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

SingleMessageOverview.propTypes = {};

export default SingleMessageOverview;
