import React, { useState } from "react";
import { login } from "../API/avion-slack-api";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [flash, setFlash] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const [response, error] = await login(email, password);
    if (error.length) {
      setError(error);
    } else {
      console.log("login response", response);
      setFlash("Login Successfully");
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <div>
          Login
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Password:</label>
            <input
              type="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error.lg}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {error.length ? error.map((err) => <p>{err}</p>) : null}
      {flash && <p>{flash}</p>}
    </div>
  );
};
export default Login;
