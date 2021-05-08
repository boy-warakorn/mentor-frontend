import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitSignin = (event) => {
    event.preventDefault();
    window.location.href = "/home";
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={submitSignin}>Sign In</button>
      </form>
    </div>
  );
};
export default Login;
