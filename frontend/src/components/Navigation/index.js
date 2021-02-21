import { useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    )
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    )
  }

  return (
    <nav>
      <NavLink exact to="/">
        <div className="nav-logo">
          <i className="fas fa-guitar" />
        </div>
      </NavLink>
      <div className="nav-links">
        <ul className="nav-ul">
          <li className="nav-li">
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
