import { useEffect } from "react";

function Register(){
    const [username,setUsername]= useEffect('');
    const [password,setPassword]= useEffect('');


    function handleSubmit(e){
        e.preventDefault();
        console.log('button was pressed')
    }
    return(
        <form onSubmit={}>
            <h2>Name</h2>
            <input type='text' name="username" placeholder="Username" value={''} onChange={e=>{setUsername(e.target.value)}} ></input>
            <input type='password' name="password" placeholder="Password" value={''} onChange={e=>{setPassword(e.target.value)}} ></input>
            <input type='password' name="confirmPassword" placeholder="Confirm Password" value={''} ></input>
            <button type="submit">Submit</button>
            <p>have an account already? <a href="/login">Login</a></p>
        </form>
    );
}

export default Register;