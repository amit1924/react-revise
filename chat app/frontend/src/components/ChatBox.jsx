/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "./Title";
import MessageList from "./MessageList";

const ChatBox = ({
  owner,
  ownerAvatar,
  sendMessage,
  typing,
  resetTyping,
  messages,
  isTyping,
}) => {
  const [isLoading, setIsLoading] = useState();

  const sendMessageLoading = (sender, senderAvatar, message) => {
    setIsLoading(true);
    sendMessage(sender, senderAvatar, message);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };
  return (
    <div className="chatApp__conv">
      <Title owner={owner} />
      <MessageList owner={owner} messages={messages} />
    </div>
  );
};

export default ChatBox;
