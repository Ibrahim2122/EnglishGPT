import React from "react";
// import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Chatbot from "./Pages/Chatbot";
import NotFound from "./Pages/NotFound";
import Button from "./Components/Button";
import PageLayout from "./Components/PageLayout";
import styles from "./App.module.css";
import { Link } from "react-router-dom";

{
  /* <Login />
      <Register />
      <Chatbot />
      <NotFound /> */
}

function App() {
  return (
    <PageLayout>
      <h1>
        Welcome to EnglishGPT, Please login or create new account to continue!
      </h1>
      <div className={styles.btnContainer}>
        <Button>
          <Link to="register">Register</Link>
        </Button>
        <Button>
          <Link to="login">Login</Link>
        </Button>
      </div>
    </PageLayout>
  );
}

export default App;
