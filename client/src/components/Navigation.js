import React from "react";
import { Link } from "react-router-dom";
import "../assets/navigation.css"

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <div>
        <ul className="navbar-nav nav-links">
          <li className="nav-item">
            <Link
              to="/search"
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation