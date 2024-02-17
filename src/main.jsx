import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./routers";
import MainContextProvider from "./contexts/index.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContextProvider>
    <RouterProvider router={router} />
  </MainContextProvider>
);
