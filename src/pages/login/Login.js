import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import "./Login.scss";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };
  // console.log(user);

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">
          <h3 className="login__logo">Friendlyyy</h3>
          <span className="login__desc">
            Connect with you friends by logging in 💌 🔥 🚀
          </span>
        </div>
        <div className="login__right">
          <form className="login__formContainer" onSubmit={handleLogin}>
            <input
              type="email"
              className="loginInput"
              placeholder="Enter you email..."
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Enter you password..."
              ref={password}
            />
            <button className="login__button">
              {isFetching ? "loading" : "Log In"}
            </button>
            <span className="login__forgotPass">Forgot Password?</span>
            <Link to="/register">
              <button className="login__createNewAcc">
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
