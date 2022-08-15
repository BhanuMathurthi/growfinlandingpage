import React from "react";
import Logo from "../../img/growfinLogo.png";

export default function Header() {
  return (
    <>
      <header id="mainheader">
        <nav
          style={{ backgroundColor: "#042D41" }}
          className="headernav navbar navbar-expand-lg navbar-dark py-4 fixed-top"
        >
          <div className="container">
            <a href="!#" className="navbar-brand">
              <img src={Logo} width="78" height="42" alt="growfin logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                <li className="nav-item">
                  <a
                    style={{ fontSize: "15px" }}
                    href="#integrations"
                    className="nav-link navbar-brand"
                  >
                    Get a demo
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ fontSize: "15px" }}
                    href="#whygrowfin"
                    className="nav-link navbar-brand"
                  >
                    Why Growfin?
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ fontSize: "15px" }}
                    href="#features"
                    className="nav-link navbar-brand"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ fontSize: "15px" }}
                    href="#testimonials"
                    className="nav-link navbar-brand"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ fontSize: "15px" }}
                    href="#integrations"
                    className="nav-link navbar-brand"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
