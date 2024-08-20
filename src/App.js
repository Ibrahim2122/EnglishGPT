import React from "react";
// import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Chatbot from "./Pages/Chatbot";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Login />
      <Register />
      <Chatbot />
      <NotFound />
    </>
  );
}

export default App;
