import UserProvider from "./UserContext";
import SocketProvider from "./SocketContext";
import { createContext, useState } from "react";

export const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MainContext.Provider
      value={{ loadingContext: { isLoading, setIsLoading } }}
    >
      <UserProvider>
        <SocketProvider>{children}</SocketProvider>
      </UserProvider>
    </MainContext.Provider>
  );
};

export default MainContextProvider;
