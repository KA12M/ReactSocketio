import React, { useContext } from "react";
import { UserContext } from "../config/UserContext";

const HeaderUser = () => {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h1>Username: {username}</h1>
    </div>
  );
};

export default HeaderUser;
