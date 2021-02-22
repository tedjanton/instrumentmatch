import { useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import LoginFormModal from "../LoginFormModal";
import ProfileButton from "../ProfileButton";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

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
            {isLoaded && (
              <ProfileButton user={sessionUser} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
