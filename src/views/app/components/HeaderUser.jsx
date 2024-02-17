import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { styled } from "styled-components";

const Container = styled.div`
  margin: 1.5rem 0rem;
  padding: 1rem;
`;

const HeaderUser = () => {
  const { username } = useContext(UserContext);

  return (
    <Container>
      <h1>Username: {username}</h1>
    </Container>
  );
};

export default HeaderUser;
