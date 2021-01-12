import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={
              "https://media1.tenor.com/images/134da48972b50d47b7866b61810e4566/tenor.gif?itemid=16717514"
            }
            className="logo"
          />
          <i>Watchİst</i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active home" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/recommend"
                className="nav-link active home"
                aria-current="page"
              >
                Recommendation
              </Link>
            </li>

            <li className="nav-item" />
            <li className="nav-item" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
