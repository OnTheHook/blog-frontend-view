import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
// import Cookies from "js-cookie";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  axios.defaults.withCredentials = true;
  async function login(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        { username, password }
      );
      console.log(response.data);
      console.log("Login: ", document.cookie);
      setUserInfo(response.data);
      setRedirect(true);
    } catch (err) {
      console.log(err);
    }

    // try {
    //   const response = await fetch("http://localhost:3000/api/v1/auth/login", {
    //     method: "POST",
    //     body: JSON.stringify({ username, password }),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     localStorage.setItem("jwt", data.token);
    //     setRedirect(true);
    //   } else {
    //     alert(data.message);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
