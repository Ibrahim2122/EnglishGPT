import React, { useEffect, useRef, useState } from "react";
import PageLayout from "../Components/PageLayout";
import Form from "../Components/Form";
import Input from "../Components/Input";
import Button from "../Components/Button";
import styles from "./Register.module.css";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMathcPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd, matchPwd]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(!username)

    if (!username || !pwd || !matchPwd) {
      setErrMsg("All fields are required");
      setSuccess(false);
      console.log("I am here");
      return;
    }

    try {
      console.log(username);
      console.log(pwd);
      console.log(matchPwd);
      console.log("I am there");

      setSuccess(true);
      setUsername("");
      setPwd("");
      setMathcPwd("");
    } catch (err) {
      errRef.current.focus();
    }
  };

  return (
    <PageLayout>
      {success ? (
        <section class={styles.success}>
          <h1>Account created successfuly!</h1>
          <Button>Login</Button>
        </section>
      ) : (
        <Form header="Register" onSubmitHandler={submitHandler}>
          <p ref={errRef} className={errMsg ? styles.errmsg : styles.offscreen}>
            {errMsg}
          </p>
          <Input
            id="username"
            type="text"
            placeholder="Please Enter your Username"
            userRef={userRef}
            onChangeHandler={(e) => setUsername(e.target.value)}
            onFocusHandler={() => setUserFocus(true)}
            onBlurHandler={() => setUserFocus(false)}
          >
            Create a new Username
          </Input>
          <p
            className={
              userFocus && username && !validName
                ? styles.instructions
                : styles.offscreen
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
          <Input
            id="password"
            type="password"
            placeholder="Please Enter your Passowrd"
            onChangeHandler={(e) => setPwd(e.target.value)}
            onFocusHandler={() => setPwdFocus(true)}
            onBlurHandler={() => setPwdFocus(false)}
          >
            Create a new Password
          </Input>
          <p
            className={
              pwdFocus && pwd && !validPwd
                ? styles.instructions
                : styles.offscreen
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>

          <Input
            id="match-pwd"
            type="password"
            placeholder="Please Enter your Passowrd"
            onChangeHandler={(e) => setMathcPwd(e.target.value)}
            onFocusHandler={() => setMatchFocus(true)}
            onBlurHandler={() => setMatchFocus(false)}
          >
            Confirm Passowrd
          </Input>
          <p
            className={
              matchFocus && !validMatch ? styles.instructions : styles.offscreen
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>
          <Button>Sign up</Button>
          <p className={styles.text}>
            Already registered?
            <br />
            <span className={styles.line}>
              {/*put router link here*/}
              <a href="#">Sign In</a>
            </span>
          </p>
        </Form>
      )}
    </PageLayout>
  );
}

export default Register;
