import React, { useEffect, useRef, useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import PageLayout from "../Components/PageLayout";
import Form from '../Components/Form'
import styles from "./Login.module.css"

function Login() {
  const userRef = useRef("");
  const errRef = useRef("");

  const [username, setUsername] = useState("");
  // const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState("");
  // const [validPwd, setValidPwd] = useState(false);
  // const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, pwd])

  const submitHandler = e => {
    e.preventDefault();

    console.log(!username)

    if (!username || !pwd) {
      setErrMsg("Username or Password is incorrect!");
      console.log("Username or Password is incorrect!");
    }

    try {
      // Authinticate the use
      console.log(username)
      console.log(pwd)
      setUsername('');
      setPwd('');
    } catch (err) {
      // Catch any errors and use setErrMsg() to display it
    }
  }
 
  return (
    <PageLayout>
      <Form header="Login" onSubmitHandler={submitHandler}>
        <p ref={errRef} className={errMsg ? styles.errmsg : styles.offscreen}>
          {errMsg}
        </p>
        <Input
          id="username"
          type="text"
          placeholder="Please Enter your Username"
          userRef={userRef}
          onChangeHandler={(e) => setUsername(e.target.value)}
        >
          Username
        </Input>
        <Input
          id="password"
          type="password"
          placeholder="Please Enter your Passowrd"
          onChangeHandler={(e) => setPwd(e.target.value)}
        >
          Password
        </Input>
        <Button>Login</Button>
      </Form>
    </PageLayout>
  );
}

export default Login;
