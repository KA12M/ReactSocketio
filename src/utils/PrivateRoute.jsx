import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const PrivateRoute = () => {
  let location = useLocation();

  const {username} = useContext(UserContext);

  if (!username) return <Navigate to="/" state={{ from: location }} />;

  return <Outlet />;
};
