import { useState } from "react";
import styles from "./Register.module.css";
import ErrorToast from "../components/ErrorToast";
import axios from "axios";
import { login_api } from "../utils/routes";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  /* function handleFormValidation() {
    if (username.length < 4) {
      console.log("I am here");
      setErrorMessage(
        <ErrorToast
          text={"username must have more than 3 characters"}
          isFail={true}
          stop={setErrorMessage}
        />
      );
      return false;
    } else if (password.length <= 4) {
      setErrorMessage(
        <ErrorToast
          text={"password must have more than 4 characters"}
          isFail={true}
          stop={setErrorMessage}
        />
      );
      return false;
    } else if (password !== confirmPassword) {
      setErrorMessage(
        <ErrorToast
          text={"Passwords don't match"}
          isFail={true}
          stop={setErrorMessage}
        />
      );
      console.log("I did run!");
      return false;
    }
    setErrorMessage(null);
    return true;
  } */

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("there in login handle submit");
    const { data } = await axios.post(login_api, {
      password,
      email,
    });
    data.loggedIn
      ? setErrorMessage(<ErrorToast
        isFail={false}
        text={"Logged In !"}
        stop={setErrorMessage}
      />)
      : setErrorMessage(
          <ErrorToast
            isFail={true}
            text={data.err}
            stop={setErrorMessage}
          />
        );
  }

  return (
    <>
      <div id={styles["register-container"]}>
        <form className={styles["register-form"]} onSubmit={handleSubmit}>
          <span>Web name</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button type="submit">Submit</button>
          <span>
            don't have an account? &nbsp;
            <a href="/register"> Register</a>
          </span>
        </form>
      </div>
      {errorMessage}
    </>
  );
}

export default Login;
