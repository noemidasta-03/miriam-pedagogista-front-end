import { useState, ChangeEvent, FormEvent } from "react";
import "./Registration.css";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const Registration = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Le password non corrispondono!");
      return;
    }

    setError("");
    console.log("Registrazione avvenuta con successo!", formData);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 3000);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (
      savedUsername === formData.username &&
      savedPassword === formData.password
    ) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }, 3000);
    } else {
      setError("Username o password errati!");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };

  return (
    <div className="container-form">
      <div className="container-img-wonderful">
        <div className="image-background" />
      </div>

      <div className="form-wrapper">
        <h2 className="title-form">
          {isLogin ? "Login" : "Form di Registrazione"}
        </h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {success && (
          <p style={{ color: "green" }}>
            {isLogin
              ? "Accesso avvenuto con successo!"
              : "Registrazione avvenuta con successo!"}
          </p>
        )}

        <form id="form-style" onSubmit={isLogin ? handleLogin : handleRegister}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="input-form"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-form"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-form"
            />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword">Conferma Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="input-form"
              />
            </div>
          )}
          <div>
            <button className="button-form-style" type="submit">
              {isLogin ? "Accedi" : "Registrati"}
            </button>
          </div>
        </form>

        <button className="button-form-style" onClick={toggleForm}>
          {isLogin
            ? "Non hai un account? Registrati"
            : "Hai già un account? Accedi"}
        </button>
      </div>
    </div>
  );
};

export default Registration;
