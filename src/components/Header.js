import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
    <nav className="Nav">
    <a class="header-link" href="/">Home</a>
    <a class="header-link" href="/about">About Me</a>
    </nav>
    </header>
  );
}
