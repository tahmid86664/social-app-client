import axios from "axios";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      setError("Password doesn't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        setError(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__left">
          <h3 className="register__logo">Friendlyyy</h3>
          <span className="register__desc">
            Register with Friendlyyy 🔥🔥🔥 and forget Facebook 😛
          </span>
        </div>
        <div className="register__right">
          {error !== "" && <div className="register__error">{error}</div>}
          <form className="register__formContainer" onSubmit={handleSubmit}>
            <input
              type="text"
              className="register__input"
              placeholder="Enter you username..."
              ref={username}
            />
            <input
              type="email"
              className="register__input"
              placeholder="Enter you email..."
              ref={email}
            />
            <input
              type="password"
              className="register__input"
              placeholder="Enter you password..."
              onChange={() => setError("")}
              minLength={6}
              ref={password}
            />
            <input
              type="password"
              className="register__input"
              placeholder="Enter you password again..."
              minLength={6}
              onChange={() => setError("")}
              ref={passwordAgain}
            />
            <button className="register__button" type="submit">
              Register
            </button>
            <Link to="/login">
              <button className="register__login">Log In</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
