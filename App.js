import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routers/MainStack";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#03a678" style="light" />
      <Routes />
    </>
  );
}
