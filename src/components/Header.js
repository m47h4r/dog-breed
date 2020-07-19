import React from "react";

import "./Header.css";

import Link from "./Link";

const headerData = [
  { id: "index", url: "/", text: "Home" },
  { id: "list", url: "/list", text: "Breed List" },
  { id: "quiz", url: "/quiz", text: "Breed Quiz" },
];

function Header({ currentPage }) {
  return (
    <nav className="navigation">
      {headerData.map((link) =>
        currentPage !== link.id ? <Link to={link.url}>{link.text}</Link> : null
      )}
    </nav>
  );
}

export default Header;
