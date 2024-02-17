import React, { useContext } from "react";
import { UserContext } from "./../../contexts/UserContext";
import { router } from './../../routers/index';
import FormUsername from './../app/components/FormUsername';

const UserScene = () => {
  const { username } = useContext(UserContext);

  const handleJoin = (e) => {
    e.preventDefault();
    router.navigate("/message");
  };
  return (
    <>
      <div>
        <FormUsername />
      </div>
      <button
        style={{ margin: "1rem 0" }}
        disabled={!username}
        onClick={handleJoin}
      >
        Join message group
      </button>
    </>
  );
};

export default UserScene;
