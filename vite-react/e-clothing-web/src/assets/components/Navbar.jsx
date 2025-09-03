import React from 'react'
import logo from "../images/image.png";
import './DropdownHandler'
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import DropdownHandler from './DropdownHandler';
import Login from './Login';
import Register from './Register';


function Navbar() {

    const { cartItems } = useSelector(state => state.cart)

    return (
        <>
            <DropdownHandler />
            <div>
                <nav className="navbar navbar-expand-lg bg-white  d-none d-lg-flex">
                    <div className="container d-flex justify-content-between">

                        {/* Left: Logo   */}
                        <NavLink className="navbar-brand d-flx align-items-center pe-3 flex-wrap" to="/home">
                            <img src={logo} alt="Logo" style={{ height: "70px" }} />
                        </NavLink>

                        {/* Center: Nav NavLinks   */}
                        <div className="collapse navbar-collapse justify-content-center" id="navbarContentDesktop">
                            <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4 fs-6">
                                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/product" >Products</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/about"  >About us</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/contact" >Contact us</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/faq" >FAQs & Policies</NavLink></li>
                            </ul>
                        </div>

                        {/* Right: Buttons   */}
                        <div className="d-flex align-items-center gap-lg-4 gap-2">


                            <div className="d-flex justify-content-between  align-items-center gap-4">
                                <Link to="/cart" className="text-black position-relative">
                                    <i className="bi bi-cart fs-5"></i>
                                    <span className='cart-icon'>{cartItems.length}</span>
                                </Link>

                                {/* <i className="bi bi-search fs-5"></i> */}
                                <i className="bi bi-heart fs-5"></i>

                                {/* Profile   */}
                                <div className="dropdown d-inline-block fs-5">
                                    <div id="profileToggleDesktop" className="d-flex align-items-center gap-2" style={{ cursor: "pointer" }}>
                                        <i className="bi bi-person-fill"></i>
                                    </div>

                                    <div id="profileDropdownDesktop" className=" dropdown-menu dropdown-menu-custom shadow m-2">
                                        <div className="dropdown-item d-flex align-items-center gap-3">
                                            <Login />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>

                {/* MOBILE NAVBAR (less than lg)   */}
                <nav className="navbar navbar-expand-lg bg-white d-flex d-lg-none">
                    <div className="container-fluid px-3">

                        {/* Left: Logo   */}
                        <NavLink className="navbar-brand " to="/home">
                            <img src={logo} alt="Logo" style={{ height: "70px" }} />
                        </NavLink>


                        {/* Right Side: Buttons   */}
                        <div className="d-flex align-items-center gap-lg-4 gap-2">


                            <div className="d-flex justify-content-between  align-items-center gap-4">
                                 <Link to="/cart" className="text-black position-relative">
                                    <i className="bi bi-cart fs-5"></i>
                                    <span className='cart-icon'>{cartItems.length}</span>
                                </Link>

                                {/* <i className="bi bi-search fs-5"></i> */}
                                <i className="bi bi-heart fs-5"></i>

                                {/* Profile   */}
                                <div className="dropdown d-inline-block fs-5">
                                    <div id="profileToggleMobile" className="d-flex align-items-center gap-2" style={{ cursor: "pointer" }}>
                                        <i className="bi bi-person-fill"></i>
                                    </div>

                                    <div id="profileDropdownMobile" className=" dropdown-menu dropdown-menu-custom shadow m-2">
                                        <div className="dropdown-item d-flex align-items-center gap-3">
                                            <Login />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Toggle Button at the END   */}
                        <button className="navbar-toggler p-1  shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#mobileMenu">
                            <span className="navbar-toggler-icon" style={{ width: "20px", height: "20px" }}></span>
                        </button>
                    </div>
                    {/* Mobile Collapsible Nav NavLinks   */}
                    <div className="collapse navbar-collapse mt-2" id="mobileMenu">
                        <ul className="navbar-nav gap-2 fs-6 ps-4">
                            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/product" >Products</NavLink></li>
                            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/about" >About us</NavLink></li>
                            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/contact" >Contact us</NavLink></li>
                            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-primary" : "nav-link"} to="/faq" >FAQs & Policies</NavLink></li>
                        </ul>
                    </div>


                </nav >
            </div>
        </>
    )
}

export default Navbar