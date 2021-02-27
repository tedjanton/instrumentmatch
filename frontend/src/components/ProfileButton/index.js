import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const instruments = useSelector(state => state.instruments.instruments)
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <li className="nav-li-dropdown">Welcome, {user.username}!</li>
        <li className="nav-li-dropdown">{user.email}</li>
        <li className="nav-li-dropdown">
         <Link to="/myrentals">My Rentals</Link>
        </li>
        <span className="line"></span>
      </>
    )
  } else {
    sessionLinks = (
      <>
        <LoginFormModal setShowMenu={setShowMenu} />
        <SignupFormModal setShowMenu={setShowMenu} />
      </>
    )
  }

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };
    document.getElementById("close-menu")
    .addEventListener("click", (e) => {
      setShowMenu(false);
    })
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = e => {
    e.preventDefault();
    setShowMenu(false);
    dispatch(sessionActions.logout());
  }


  return (
    <>
      <button className="user-menu-buttons" onClick={openMenu}>
        <i className="fas fa-bars" />
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li id="close-menu">
            <button>x</button>
          </li>
          {sessionLinks}
            {user && (
              <li className="logout-button-container">
                <button className="logout-button" onClick={logout}>
                 Log Out
                </button>
              </li>
            )}
        </ul>
      )}
    </>
  )
}

export default ProfileButton;
