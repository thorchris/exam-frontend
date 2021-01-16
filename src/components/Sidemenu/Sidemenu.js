import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FaUserAlt, FaHome, FaBookOpen, FaUserShield, FaLock, FaHandHolding } from "react-icons/fa"

export default function SideMenu({ loginMsg, isLoggedIn, user }) {
    let username = isLoggedIn ? `Logged in as: ${user.username}` : "";
  return (

    <Menu>
          <NavLink className="menu-item" to="/">
          <span role="img" aria-label="home"><FaHome/>  </span>
            Home
          </NavLink>

          <NavLink className="menu-item" to="/books">
          <span role="img" aria-label="books"><FaBookOpen/>  </span>
            Books
          </NavLink>

          {isLoggedIn && (
          <NavLink className="menu-item" to="/admin">
          <span role="img" aria-label="admin"><FaUserShield/>  </span>
            Admin
          </NavLink>
          )}

          {isLoggedIn && (
          <NavLink className="menu-item" to="/loans">
          <span role="img" aria-label="loans"><FaHandHolding/>  </span>
            Loans
          </NavLink>
          )}


          <NavLink className="menu-item" to="/login-out">
          <span role="img" aria-label="login-out"><FaLock/>  </span>
            {loginMsg}
          </NavLink>


          {isLoggedIn && (
          <>  
            <span role="img" aria-label="user"> <FaUserAlt/> {username}</span>
          </>
        )}
    </Menu>
  );
};