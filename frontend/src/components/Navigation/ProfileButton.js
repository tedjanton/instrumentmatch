import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  }

  return (
    <>
      <button className="user-menu-buttons" onClick={openMenu}>
        <i className="fas fa-bars" />
        <i className="fas fa-user" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="nav-li-dropdown">{user.username}</li>
          <li className="nav-li-dropdown">{user.email}</li>
          <li>
            <button className="logout-button" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  )
}

export default ProfileButton;
