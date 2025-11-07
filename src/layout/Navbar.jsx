import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand">Stock Watcher</a>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/stocks">Stocks</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
