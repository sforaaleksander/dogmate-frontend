import React, { useEffect, useState } from "react";
import { data } from "./test-conversation-data";
import ConversationItem from "./ConversationItem";
import { useParams } from "react-router-dom";

const MY_USER_ID = 1; //todo get real logged user id

function renderMessages(messages) {
  let i = 0;
  let messageCount = messages.length;
  let tempMessages = [];

  while (i < messageCount) {
    let previousMessage = messages[i - 1];
    let currentMessage = messages[i];
    let nextMessage = messages[i + 1];
    let isMine = currentMessage.sender.id === MY_USER_ID;

    tempMessages.push(
      <ConversationItem
        key={i}
        isMine={isMine}
        // startsSequence={startsSequence}
        // endsSequence={endsSequence}
        // showTimestamp={showTimestamp}
        data={currentMessage}
      />
    );

    // Proceed to the next message.
    i += 1;
  }

  return tempMessages;
}

export default function Conversation() {
  let params = useParams();
  const [conversationID, setConversationID] = useState(params.id);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const getMessages = (conversationID) => {
    //todo  get json with messages for logged user
    //todo use THIS conversationID TO GET CONVERSATION WITH THIS USER ID
    console.log("getmessages conversation id: " + conversationID);
    setMessages([...messages, ...data]);
  };

  useEffect(() => {
    getMessages(conversationID);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputMessage === "") {
      return;
    }
    console.log("submitting message");
    //todo post new message and get all messages again?
    setInputMessage("");
  }

  return (
    <div className={"conversation-wrapper"}>
      <div className="message-list-container">{renderMessages(messages)}</div>
      <div className="message-input">
        <form className="chat-input" onSubmit={handleSubmit}>
          <textarea
            // type="text"
            name="message"
            onChange={(e) => {
              setInputMessage(e.target.value);
            }}
            value={inputMessage}
            placeholder="Type a message..."
            // required
          />
          <svg
            onClick={handleSubmit}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8005 0.0797666L0.29025 13.5872C0.0870749 13.7606 0.0120937 14.0929 0 14.2374V14.5263C0 14.8152 0.266062 15.0078 0.399093 15.068L6.02268 17.3795L20.8617 4.59431L8.88889 19.2214V24.2777C8.91308 24.3379 8.96871 24.4799 8.99774 24.5666C9.02676 24.6533 9.13077 24.7713 9.17914 24.8194C9.22752 24.8796 9.41134 25 9.75964 25C10.1079 25 10.3885 24.7833 10.4853 24.675L13.8231 20.5577L20.1723 23.122C20.3538 23.1942 20.7819 23.2736 21.0431 23.0136C21.3043 22.7536 21.3696 22.4478 21.3696 22.3274C22.5669 15.2486 24.9687 1.03325 24.9977 0.802105C25.0268 0.570961 24.768 0.320555 24.6349 0.224245C24.6591 0.23628 24.6494 0.224232 24.4172 0.0797666C24.185 -0.0646984 23.9093 0.0195729 23.8005 0.0797666Z"
              fill="#787876"
            />
          </svg>
        </form>
      </div>
    </div>
  );
}
