import React, { useState } from "react";

const UsernameForm = ({ username, sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }}
    >
      <input
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={!username || !message}>
        Send message
      </button>
    </form>
  );
};

export default UsernameForm;
