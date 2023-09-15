import { useState } from "react";
import styles from "./Register.module.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("button was pressed");
  }
  return (
    <div id={styles["register-container"]}>
      <form className={styles["register-form"]} onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={""}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={""}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={""}
        ></input>
        <button type="submit">Submit</button>
        <span>have an account already? &nbsp;
          <a href="/login"> Login</a>
        </span>
      </form>
    </div>
  );
}

export default Register;
