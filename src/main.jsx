import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SocketProvider from "./config/SocketContext.jsx";
import UserProvider from "./config/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </SocketProvider>
);
