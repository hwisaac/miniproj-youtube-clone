import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SNB from "./components/SNB";

function App() {
  return (
    <>
      <Header />
      <SNB />
      <Outlet />
    </>
  );
}

export default App;
