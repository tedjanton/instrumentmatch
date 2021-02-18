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
    console.log("credential: ", credential);
    console.log("password: ", password);
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    })
  }

  return (
    <div className="wrapper">
      <h2>Welcome</h2>
      <div id="formContent">
        <form onSubmit={onSubmit} className="login-form wrapper">
          <div className="login-errors">
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
                ))}
            </ul>
          </div>
          <div className="login-credential">
            <label htmlFor="credential">
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                placeholder="Username or Email"
                required
              />
            </label>
          </div>
          <div className="login-password">
            <label htmlFor="password">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </label>
          </div>
          <div className="login-button">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginFormPage;
