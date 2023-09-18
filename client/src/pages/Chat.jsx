import axios from "axios";
import { useEffect, useState } from "react";
import { userPage_api } from "../utils/routes";
import ErrorToast from "../components/ErrorToast";
export default function Chat() {
  const [user, setUser] = useState("");
  const [welecomeAlert,setWelcomeAlert]=useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      /*if (!cookies.jwt) {
        console.log('Chat.jsx: NO JWT token')
      } 
      else {*/
        const { data } = await axios.post(
        userPage_api,{},{withCredentials: true,});
        setUser(data.name);
        setWelcomeAlert(<ErrorToast text={`Hi ${data.name}, welecome!`} isFail={false} stop={setWelcomeAlert} />);
      };
    verifyUser();
  }, []);



  return <>{user ? welecomeAlert : null}</>;
}
