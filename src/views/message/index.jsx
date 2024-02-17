import React, { useContext, useEffect, useState } from "react";
import UsernameForm from "./components/UsernameForm";
import MessageList from "./components/MessageList";
import { UserContext } from "./../../contexts/UserContext";
import { SocketContext } from "../../contexts/SocketContext";

const MessageScene = () => {
  const { username } = useContext(UserContext);
  const { client } = useContext(SocketContext);

  const [data, setData] = useState([]);

  const sendMessage = (message) => {
    console.log("Button clicked");
    client.emit("send-message", { username, message });
  };

  const handleMessageSocket = () => {
    const handleSetMessage = (data) => {
      setData(data);
    };
    client.emit("get-message", {});
    client.on("receive-message", handleSetMessage);
    client.on("new-message", handleSetMessage);
  };

  useEffect(() => {
    if (client) handleMessageSocket();
  }, [handleMessageSocket]);

  return (
    <>
      <UsernameForm username={username} sendMessage={sendMessage} />
      <MessageList data={data} />
    </>
  );
};

export default MessageScene;
