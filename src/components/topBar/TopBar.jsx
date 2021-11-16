import React from "react";
import "./topBar.scss";
import { Person, Email } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Home
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+33 710 10 10 10</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>contact@gmail.com</span>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
