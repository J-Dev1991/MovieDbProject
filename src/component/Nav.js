import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="nav">
      <div className="nav-link">
        <h2 className="movieb">MovieBase</h2>
        <span className="link">
          <h3>Home</h3>
          <Link to="/about">
            <h3>About</h3>
          </Link>
        </span>
      </div>
    </nav>
  );
}
