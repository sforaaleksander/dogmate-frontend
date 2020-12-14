import React from 'react';
import {data} from "./test-messages-data";
import SingleMessageOverview from "./SingleMessageOverview";
import './messages.css'



function MessagesOverview() {
    //todo fetch data from api
    return (
        <div className={"messages-container"}>
            {data.map((userMessage) => {
                return <SingleMessageOverview key={userMessage.id} {...userMessage} />;
            })}
        </div>
    );
}

export default MessagesOverview;
