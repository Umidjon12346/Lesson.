import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../components/Home";

function Index() {
  const location = useLocation();
  const isOnlyApiPath = location.pathname === "/api";

  return (
    <>
      {isOnlyApiPath && <Home />}
      <Outlet />
    </>
  );
}

export default Index;
