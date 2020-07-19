import React from "react";

import "./Header.css";

import Link from "./Link";

function Header () {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/list">Breed List</Link>
      <Link to="/quiz">Breed Quiz</Link>
    </nav>
  );
}

export default Header;
