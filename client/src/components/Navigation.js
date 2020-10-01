import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Wikipedia Searcher
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Navigation