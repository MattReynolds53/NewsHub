// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import logo from "../images/MRLogo.jpg";

const styles = {
  logo: {
    width: "15%",
    height: "15%",
    borderRadius: "45%",
  },
  aTag: {
    width: "42%",
    color: "black",
  },
};

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#home"
          style={styles.aTag}
          onClick={() => handlePageChange("About")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          <img
            src={logo}
            class="card-img-top"
            alt="Logo"
            style={styles.logo}
          ></img>
          Matthew Reynolds
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#About"
                onClick={() => handlePageChange("About")}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#Projects"
                onClick={() => handlePageChange("Projects")}
                // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#Contact"
                onClick={() => handlePageChange("Contact")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact Me
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
                // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
