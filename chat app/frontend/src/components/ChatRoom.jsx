/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ChatBox from "./ChatBox";
import { v4 as uuidv4 } from "uuid";

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    {
      id: uuidv4(), // Generate a unique ID for the initial message
      sender: "John",
      senderAvatar: "https://i.pravatar.cc/150/img=56",
      message: "Hello",
    },
  ]);

  const [isTyping, setIsTyping] = useState({});
  const users = {
    Maria: "https://i.pravatar.cc/150/img=56",
    John: "https://i.pravatar.cc/150/img=32",
  };

  const sendMessage = (sender, senderAvatar, message) => {
    setTimeout(() => {
      let newMessageItem = {
        id: uuidv4(), // Generate a new ID for each message
        sender: sender,
        senderAvatar: senderAvatar,
        message: message,
      };

      setMessages((prevMessages) => [...prevMessages, newMessageItem]); // Use prevMessages to avoid stale state

      resetTyping(sender);
    }, 400);
  };

  const typing = (writer) => {
    if (!isTyping[writer]) {
      // Check if the writer is not already typing
      setIsTyping((prev) => ({
        ...prev,
        [writer]: true,
      }));
    }
  };

  const resetTyping = (writer) => {
    if (isTyping[writer]) {
      // Check if the writer is currently typing
      setIsTyping((prev) => ({
        ...prev,
        [writer]: false, // Set typing status to false
      }));
    }
  };

  return (
    <div className="chatApp__room">
      {Object.entries(users).map(([user, avatar]) => (
        <ChatBox
          key={user}
          owner={user} // Corrected prop name
          ownerAvatar={avatar}
          sendMessage={sendMessage}
          typing={typing}
          resetTyping={resetTyping}
          messages={messages}
          isTyping={isTyping}
        />
      ))}
    </div>
  );
};

export default ChatRoom;
