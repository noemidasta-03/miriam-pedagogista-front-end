import React, { useState, FormEvent } from "react";
import "./LoginForm.css";

interface LoginForm {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginForm> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setErrorMessage("Entrambi i campi sono obbligatori!");
    } else {
      setErrorMessage("");
      onLogin(username, password);

      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  return (
    <div className="login-container">
      <h2 className="title-form">Login</h2>
      <form id="form-style" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Inserisci il tuo username"
            required
            className="input-form"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Inserisci la tua password"
            required
            className="input-form"
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="button-form-style">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
