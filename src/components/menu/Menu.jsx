import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro" className="ref">
            Home
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio" className="ref">
            Portfolio
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works" className="ref">
            Works
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials" className="ref">
            Testimonials
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact" className="ref">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
