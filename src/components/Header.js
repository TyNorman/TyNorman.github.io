import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
    <nav className="Nav">
    <a href="/">Home</a>
    <a href="/about">About Me</a>
    <a href="/contact">Contact</a>
    </nav>
    </header>
  );
}
