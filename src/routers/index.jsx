import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../views/app/App";
import MessageScene from "../views/message";
import UserScene from "../views/user";
import { PrivateRoute } from "../utils/PrivateRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<UserScene />} />
      <Route path="*" element={<h1>page not found 404</h1>} />

      <Route element={<PrivateRoute />}>
        <Route path="/message" element={<MessageScene />} />
      </Route>
    </Route>
  )
);
