import React from "react";
import styled from "styled-components";

const LoadPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoadingProvider = () => {
  return (
    <LoadPage>
      <h1>Loading...</h1>
    </LoadPage>
  );
};

export default LoadingProvider;
