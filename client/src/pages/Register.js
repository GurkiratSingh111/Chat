import { useState } from "react";
import styles from "./Register.module.css";
import ErrorToast from "../components/ErrorToast";
import axios from "axios";
import { register_api } from "../utils/routes";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage , setErrorMessage] =useState(null);



  function handleFormValidation(){
    if(username.length < 4){
      console.log('I am here')
      setErrorMessage( <ErrorToast text={'username must have more than 3 characters'} isFail={true} stop={setErrorMessage}/>);
      return false;
    }
    else if (password.length <= 4){
      setErrorMessage( <ErrorToast text={'password must have more than 4 characters'} isFail={true} stop={setErrorMessage}/>);
      return false;
    }
    else if(password !== confirmPassword){
      setErrorMessage( <ErrorToast text={'Passwords don\'t match'} isFail={true} stop={setErrorMessage}/>);
      console.log('I did run!')
      return false;
    }
    setErrorMessage(null);
    return true;
  }


  async function handleSubmit(e) {
    e.preventDefault();
    const verifiedForm = handleFormValidation();
    if (verifiedForm){
      console.log('there');
      const {data} = await axios.post(register_api,{username,password,email});
      console.log(data);
    }
    console.log("button was pressed");
  }

  
  return (
    <>
    <div id={styles["register-container"]}>
      <form className={styles["register-form"]} onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={e=>{setConfirmPassword(e.target.value)}}
        ></input>
        <button type="submit">Submit</button>
        <span>have an account already? &nbsp;
          <a href="/login"> Login</a>
        </span>
      </form>
    </div>
    {errorMessage? errorMessage : null}
    </>
  );
}

export default Register;
