import { useState } from "react";
import * as sessionActions from "../../store/session"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

const LoginFormPage = () => {
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  if (sessionUser) {
    return (<Redirect to="/" />)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    })
  }

  return (
    <div className="login-page-wrapper">
      <div id="login-formContent">
        <form onSubmit={onSubmit} className="login-form wrapper">
        <h2 className="login-h2">Log In</h2>
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
        </form>
      </div>
    </div>
  )
}

export default LoginFormPage;
