import React from "react";
import { Link } from 'react-router-dom'
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <nav className="Nav">
        <Link to={"/"} class="header-link">Home</Link>
        <Link to={"/about"} class="header-link">About Me</Link>
      </nav>
    </header>
  );
}
