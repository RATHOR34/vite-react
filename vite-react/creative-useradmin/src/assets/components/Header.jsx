import React, { useState, useEffect, useRef } from "react";
import "../css/style.css";
import logo from "../images/logo-cwp.png";

function Navbar() {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const desktopDropdownRef = useRef(null);
  const desktopToggleRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileToggleRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event) {
      // Desktop
      if (
        isDesktopOpen &&
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target) &&
        desktopToggleRef.current &&
        !desktopToggleRef.current.contains(event.target)
      ) {
        setIsDesktopOpen(false);
      }

      // Mobile
      if (
        isMobileOpen &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target) &&
        mobileToggleRef.current &&
        !mobileToggleRef.current.contains(event.target)
      ) {
        setIsMobileOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDesktopOpen, isMobileOpen]);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white d-none d-lg-flex">
        <div className="container">
          {/* Left: Logo */}
          <a className="navbar-brand d-flex align-items-center pe-3" href="#">
            <img src={logo} alt="Logo" style={{ height: "45px" }} />
          </a>

          {/* Center: Nav Links */}
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarContentDesktop"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4 fs-6">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="job-listing.html">
                  Work Opportunities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Buttons */}
          <div className="d-flex align-items-center gap-lg-4 gap-2">
            <div className="position-relative">
              <i className="bi bi-bell fs-5 bell-icon"></i>
              <span className="notification-badge">1</span>
            </div>

            {/* Profile */}
            <div className="dropdown">
              <div
                ref={desktopToggleRef}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDesktopOpen((prev) => !prev);
                }}
                className="d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzY4a-OKIGR2goDCh5777L73eh-ZNHc-Cng&s"
                  className="rounded-circle object-fit-cover nav-profile-img"
                  style={{ width: "30px", height: "30px" }}
                />
                <i className="fas fa-chevron-down dropdown-icon"></i>
              </div>
              <ul
                ref={desktopDropdownRef}
                className={`dropdown-menu dropdown-menu-custom shadow m-2 ${
                  isDesktopOpen ? "show" : ""
                }`}
              >
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="#"
                  >
                    <i className="bi bi-person"></i> Profile
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="#"
                  >
                    <i className="bi bi-key"></i> Password Change
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="#"
                  >
                    <i className="bi bi-gem"></i> My Subscriptions
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider mx-3" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white d-flex d-lg-none">
        <div className="container-fluid px-3">
          {/* Left: Logo */}
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" style={{ height: "45px" }} />
          </a>

          {/* Right Side: Buttons */}
          <div className="d-flex align-items-center gap-2">
            <div className="position-relative">
              <i className="bi bi-bell bell-icon"></i>
              <span className="notification-badge">1</span>
            </div>

            {/* Profile */}
            <div className="dropdown">
              <div
                ref={mobileToggleRef}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileOpen((prev) => !prev);
                }}
                className="d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzY4a-OKIGR2goDCh5777L73eh-ZNHc-Cng&s"
                  className="rounded-circle object-fit-cover nav-profile-img"
                  style={{ width: "30px", height: "30px" }}
                />
                <i className="fas fa-chevron-down dropdown-icon"></i>
              </div>
              <ul
                ref={mobileDropdownRef}
                className={`dropdown-menu-custom dropdown-menu shadow m-2 ${
                  isMobileOpen ? "show" : ""
                }`}
              >
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="#"
                  >
                    <i className="bi bi-person"></i> Profile
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="#"
                  >
                    <i className="bi bi-key"></i> Password Change
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="#"
                  >
                    <i className="bi bi-gem"></i> My Subscriptions
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider mx-3" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </a>
                </li>
              </ul>
            </div>

            {/* Toggle Button */}
            <button
              className="navbar-toggler p-1 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileMenu"
            >
              <span
                className="navbar-toggler-icon"
                style={{ width: "20px", height: "20px" }}
              ></span>
            </button>
          </div>

          {/* Mobile Collapsible Nav Links */}
          <div className="collapse navbar-collapse mt-2" id="mobileMenu">
            <ul className="navbar-nav gap-2 fs-6">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="job-listing.html">
                  Work Opportunities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="profile.html">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
