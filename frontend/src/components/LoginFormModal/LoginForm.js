import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css"

const LoginForm = ({ setShowMenu }) => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setShowMenu(false);
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    })
  }

  console.log(setShowMenu);

  const onSubmitGuest = (e) => {
    e.preventDefault();
    setErrors([]);
    if (setShowMenu) setShowMenu(false);
    return dispatch(sessionActions.login({
      credential: "demo@user.io",
      password: "password"
    })).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    })
  }

  return (
    <div className="login-page-wrapper">
      <div id="login-formContent">
        <form onSubmit={onSubmit} className="login-form-wrapper">
        <h2 className="login-h2">{setShowMenu ? "log in" : "log in to book rental"}</h2>
          <div className="login-errors">
            <ul className="login-ul">
              {errors.map((error) => (
                <li className="login-li" key={error}>{error}</li>
                ))}
            </ul>
          </div>
          <input
            className="login-input"
            type="text"
            name="credential"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Username or Email"
            required
          />
          <input
            className="login-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="login-button" type="submit">Log In</button>
          <div className="login-demo-wrapper">
            <div className="line demo-line"></div>
              <div className="login-demo-text">
                <p>Don't have an account but want to try out the site?</p>
              </div>
            <button
            className="login-button-demo"
            onClick={(e) => onSubmitGuest(e)}>Guest Log In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
