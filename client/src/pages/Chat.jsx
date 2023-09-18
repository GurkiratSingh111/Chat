import axios from "axios";
import { useEffect, useState } from "react";
import { userPage_api } from "../utils/routes";
export default function Chat() {
  const [user, setUser] = useState("");
  const getUser = async function () {
    const { data } = await axios.get(userPage_api, {} , { withCredentials: true });
    return data.name;
  };
  useEffect(() => {
    getUser().then((name) => {
      setUser(name);
    }).catch((err)=>{setUser('')});
  }, []);
  return (
    <> 
    {user? <p>{user}</p>: 'shit'}
    </>
  );
}
