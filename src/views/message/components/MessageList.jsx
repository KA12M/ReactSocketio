import React from "react";

const MessageList = ({ data }) => {
  return (
    <div>
      {data.map((item, i) => (
        <p key={i}>
          {item.username}: {item.message}
        </p>
      ))}
    </div>
  );
};

export default MessageList;
