import React, { useContext, useState } from "react";
import { UserContext } from "../config/UserContext";

const FormUsername = () => {
  const { username, setUsername } = useContext(UserContext);

  const [inputText, setInputText] = useState(username);

  const onSubmit = (e) => {
    e.preventDefault();
    setUsername(inputText);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="username..."
      />
      <button type="submit" disabled={!inputText || username === inputText}>
        submit
      </button>
    </form>
  );
};

export default FormUsername;
