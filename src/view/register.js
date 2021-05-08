import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitSignUp = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Confirm password must be same as password");
      return;
    }

    window.location.href = "/home";
  };

  return (
    <div className="login">
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
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button onClick={submitSignUp}>Sign In</button>
      </form>
    </div>
  );
};
export default Register;
