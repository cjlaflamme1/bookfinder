import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand">Google Book Finder</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Search
          </Link>

        </li>

        <li className="nav-item">
          <Link to="/saved" className="nav-link">
            Saved Books
          </Link>


        </li>
      </ul>
    </nav>
  );
}

export default Nav;