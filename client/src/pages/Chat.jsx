import axios from "axios";
import { useEffect, useState } from "react";
import { userPage_api } from "../utils/routes";
export default function Chat() {
  const [user, setUser] = useState("");
  

  useEffect(() => {
    const verifyUser = async () => {
      /*if (!cookies.jwt) {
        console.log('Chat.jsx: NO JWT token')
      } 
      else {*/
        const { data } = await axios.post(
        userPage_api,{},{withCredentials: true,});
        console.log('IN REACT:')
        console.log(data);
        setUser(data.email);
      };
    verifyUser();
  }, []);



  return <>{user ? <p>{user}</p> : null}</>;
}
