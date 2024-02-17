import { createContext, useCallback, useEffect, useState } from "react";
import io from "socket.io-client";

const URL = "http://localhost:9000";

export const SocketContext = createContext({});

const SocketProvider = ({ children }) => {
  const [client, setClient] = useState();

  const connectHandler = useCallback(async () => {
    new Promise((resolve, reject) => {
      const hub = io.connect(URL);

      hub.on("connect", () => {
        console.info("Socket connection had been established.");
        resolve("");
      });
      hub.on("error", (err) => {
        console.error("Connection error: ", err);
        reject(err);
      });
      hub.on("reconnect", () => {
        console.error("Reconnecting");
      });

      setClient(hub);
    });
  }, [client]);

  useEffect(() => {
    connectHandler();
  }, []);

  return (
    <SocketContext.Provider value={{ client }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
