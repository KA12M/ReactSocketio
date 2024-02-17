import { useContext, useEffect } from "react";
import "./App.css";

import HeaderUser from "./components/HeaderUser";
import { Outlet } from "react-router-dom";
import { MainContext } from "./../../contexts/index";
import LoadingProvider from "./../../components/LoadingProvider";

function App() {
  const { isLoading, setIsLoading } = useContext(MainContext).loadingContext;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) return <LoadingProvider />;

  return (
    <div className="App">
      <HeaderUser />
      <Outlet />
    </div>
  );
}

export default App;
