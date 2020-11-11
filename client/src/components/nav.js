import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav >
      <Link to="/">
        Search
      </Link>
      <Link to="/saved">
        Saved Books
      </Link>
    </nav>
  );
}

export default Nav;