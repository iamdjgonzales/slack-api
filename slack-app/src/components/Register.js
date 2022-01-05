import React, { useState } from "react";
import { register } from "../API/avion-slack-api";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const [flash, setFlash] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const [response, errors] = await register(
      email,
      password,
      passwordConfirmation
    );
    if (errors.length > 0) {
      setError(errors);
    } else {
      console.log("register response", response);
      setFlash("Registered Successfuly");
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <div>
          Register
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="Email"
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
          <div>
            <label htmlFor="">Confirm Password:</label>
            <input
              type="Confirm Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
      {error.length ? error.map((err) => <p>{err}</p>) : null}
      {flash && <p>{flash}</p>}
    </div>
  );
};

export default Register;
