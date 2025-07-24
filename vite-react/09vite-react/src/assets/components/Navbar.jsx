 import React from "react";
 import logo from "../images/logo-cwp.png"
 import { Link } from "react-router-dom"; 
import "./Navbar.css"
 function Navbar() {
  return (
    <div>
      {/* DESKTOP NAVBAR (lg and above) */}
      <nav className="navbar navbar-expand-lg bg-white d-none d-lg-flex">
        <div className="container">

          {/* Left: Logo */}
          <a className="navbar-brand d-flex align-items-center pe-3" href="#">
           <img src={logo} alt="Logo" style={{ height: "45px" }} />
          </a>

          {/* Center: Nav Links */}
          <div className="collapse navbar-collapse justify-content-start" id="navbarContentDesktop">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4 fs-6">
              <li className="nav-item"><Link className="nav-link active" to="#">Dashboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Work Opportunities</Link></li>
              <li className="nav-item"><Link className="nav-link" href="profile.html">Profile</Link></li>
            </ul>
          </div>

          {/* Right: Notifications and Profile */}
          <div className="d-flex align-items-center gap-lg-4 gap-2">
            <div className="position-relative">
              <i className="far fa-bell fs-5 bell-icon"></i>
              <span className="notification-badge">1</span>
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown">
              <div id="profileToggleDesktop" className="d-flex align-items-center gap-2" style={{ cursor: "pointer" }}>
                {/* <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzY4a-OKIGR2goDCh5777L73eh-ZNHc-Cng&s"
                  className="rounded-circle object-fit-cover nav-profile-img"
                  style={{ width: "30px", height: "30px" }}
                  alt="profile"
                /> */}
                <i className="fas fa-chevron-down dropdown-icon"></i>
              </div>

              <ul className="dropdown-menu dropdown-menu-custom shadow m-2">
                <li><a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="bi bi-person"></i> Profile</a></li>
                <li><a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="bi bi-key"></i> Password Change</a></li>
                <li><a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="bi bi-gem"></i> My Subscriptions</a></li>
                <li><a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="bi bi-box-arrow-right"></i> Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white d-flex d-lg-none">
        <div className="container-fluid px-3">
          <a className="navbar-brand" href="#">
            {/* <img src="/images/logo-cwp.png" alt="Logo" style={{ height: "45px" }} /> */}
          </a>

          <div className="d-flex align-items-center gap-2">
            <div className="position-relative">
              <i className="far fa-bell fs-5 bell-icon"></i>
              <span className="notification-badge">1</span>
            </div>

            <div className="dropdown">
              <div id="profileToggleMobile" className="d-flex align-items-center gap-2" style={{ cursor: "pointer" }}>
                {/* <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzY4a-OKIGR2goDCh5777L73eh-ZNHc-Cng&s"
                  className="rounded-circle object-fit-cover nav-profile-img"
                  style={{ width: "30px", height: "30px" }}
                  alt="profile"
                /> */}
                <i className="fas fa-chevron-down dropdown-icon"></i>
              </div>

              <ul className="dropdown-menu-custom dropdown-menu shadow m-2">
                <li><a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="bi bi-person"></i> Profile</a></li>
                <li><a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="bi bi-key"></i> Password Change</a></li>
                <li><a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="bi bi-gem"></i> My Subscriptions</a></li>
                <li><a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="bi bi-box-arrow-right"></i> Logout</a></li>
              </ul>
            </div>

            <button
              className="navbar-toggler p-1 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse mt-2" id="mobileMenu">
            <ul className="navbar-nav gap-2 fs-6">
              <li className="nav-item"><Link className="nav-link active" to="#">Dashboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="job-listing.html">Work Opportunities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="profile.html">Profile</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
