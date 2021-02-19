import { useState } from "react";
import * as sessionActions from "../../store/session"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './SignupForm.css';

const SignupFormPage = () => {
  const sessionUser = useSelector(state => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  if (sessionUser) {
    return (<Redirect to="/" />)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
     setErrors([]);
     return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field'])
  }

  return (
    <div className="signup-page-wrapper">
      <h2 className="signup-h2">Sign Up</h2>
      <div id="signup-formContent">
        <form onSubmit={onSubmit} className="signup-form-wrapper">
          <div className="signup-errors">
            <ul className="signup-ul">
              {errors.map((error) => (
                <li className="signup-li" key={error}>{error}</li>
                ))}
            </ul>
          </div>
          <input
            className="signup-input"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            className="signup-input"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="signup-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            className="signup-input"
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <button className="signup-button" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignupFormPage;
