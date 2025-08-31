import React from 'react';
import { Link } from 'react-router-dom'
import visa from '../images/visa.png'
import Mastercard from '../images/MasterCard.png'
import PayPal from '../images/PayPal.svg.png'

function Footer() {
    return (
        <div>
            <footer className="bg-dark text-white py-5 mt-5 pb-4 px-3 px-lg-0">
                <div className="container">
                    <div className="row">

                        {/* TOP CATEGORIES   */}
                        <div className="col-md-3 col-sm-6">
                            <h5 className="fw-bold">TOP CATEGORIES</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#" className="text-white text-decoration-none">Men Shirts</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Women Wear</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Girls Wear</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Kids Wear </Link></li>
                            </ul>
                        </div>

                        {/* HELP   */}
                        <div className="col-md-3 col-sm-6">
                            <h5 className="fw-bold">HELP</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#" className="text-white text-decoration-none">Delivery</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Returns</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Secure Payments</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Track an order</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Contact us</Link></li>
                            </ul>
                        </div>

                        {/* ABOUT US   */}
                        <div className="col-md-3 col-sm-6">
                            <h5 className="fw-bold">ABOUT US</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#" className="text-white text-decoration-none">Careers</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Terms & Conditions of Sales</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Privacy Policy</Link></li>
                                <li><Link to="#" className="text-white text-decoration-none">Responsibility</Link></li>
                            </ul>
                        </div>

                        {/* FEEDBACK   */}
                        <div className="col-md-3 col-sm-6">
                            <h5 className="fw-bold">FEEDBACK</h5>
                            <Link to="#" className="text-white text-decoration-none">Leave a feedback</Link>
                        </div>

                    </div>

                    <hr className="bg-secondary mt-4 mb-3"></hr>

                    {/* BOTTOM SECTION  */}
                    <div className="row align-items-center">

                        {/* STORE LOCATOR   */}
                        <div className="col-md-4 mb-3">
                            <h6 className="fw-bold">FIND A STORE</h6>
                            <p>Find Timberland® Products Near You</p>
                            <button className="btn btn-warning text-white fw-bold px-4">STORE LOCATOR</button>
                        </div>

                        {/* SOCIAL MEDIA  */}
                        <div className="col-md-4 mb-3 text-md-start">
                            <h6 className="fw-bold">FOLLOW US</h6>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-5">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-5">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-5">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>

                        {/* NEWSLETTER  */}
                        <div className="col-md-4 mb-3">
                            <h6 className="fw-bold">NEWSLETTER SUBSCRIPTION</h6>
                            <p>Receive product news and updates in your inbox.</p>
                            <div className="input-group mb-2">
                                <input type="email" className="form-control" placeholder="Email Address" />
                                <button className="btn btn-warning text-white fw-bold">➤</button>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="privacyCheck" />
                                <label className="form-check-label small" htmlFor="privacyCheck">
                                    I've read and accept Timberland's <Link to="#" className="text-white text-decoration-underline">Privacy
                                        Policy</Link>
                                </label>
                            </div>
                        </div>

                    </div>
                    {/* PAYMENT ICONS  */}
                    <div className="mt-4">
                        <p className="mb-2 fw-bold">SECURE ONLINE SHOPPING</p>
                        <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
                            <img src={visa} alt="Visa" height="30px" />
                        </a>
                        <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer" className="ms-2">
                            <img src={Mastercard} alt="MasterCard" height="30px" />
                        </a>
                        <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer" className="ms-2">
                            <img src={PayPal} alt="PayPal" height="30px" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer