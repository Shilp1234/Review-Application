import React from "react";
import "../NavBar/Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" id="main"href="https://knovator.com/">
            KNOVATOR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://knovator.com/services/"
                >
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://knovator.com/casestudy/">
                  {" "}
                  Casestudy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://knovator.com/industry-solutions/"
                >
                  Industry
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="https://knovator.com/job-board-software/"
                >
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="https://knovator.com/blog/"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="https://knovator.com/career/"
                >
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="https://knovator.com/contact-us/"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar
