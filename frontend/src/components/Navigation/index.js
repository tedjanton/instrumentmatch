import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "../ProfileButton";
import SearchBar from "../SearchBar";
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
      <div className="nav-search">
        <SearchBar />
      </div>
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
