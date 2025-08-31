import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-lg-7">
                    <div className="form-section">

                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">your Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter your email" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="topic" className="form-label">Subject</label>
                                <input type="text" className="form-control" id="topic" placeholder="Order Enquiry" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Query Type</label>
                                <select className="form-select" id="type" defaultValue="">
                                    <option value="" disabled>Select a topic</option>
                                    <option value="support">Support</option>
                                    <option value="sales">Sales</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>

                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Your Message</label>
                                <textarea type="message" className="form-control" id="message"
                                    placeholder="write your message here" rows="5" required></textarea>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn text-white" style={{ backgroundColor: "#008DB1" }}>Submit</button>
                            </div>
                        </form>

                    </div>

                </div>

                {/* Contact Info & Socials  */}
                <div className="col-lg-5">
                    <div className="contact-info">
                        <h5><i className="bi bi-telephone-fill"></i> Contact Information</h5>
                        <div className='pb-3'>
                            <h6>Phone:</h6>
                            <a href="tel:+915432168908" className="text-decoration-none light-blue">
                                +91 54321 68908
                            </a>
                        </div>

                        <div className='pb-3'>
                            <h6>Email:</h6>
                            <a href="mailto:support@gmail.com" className="text-decoration-none light-blue">
                                support@gmail.com
                            </a>
                        </div>

                        <div className='pb-3'>
                            <h6>Address:</h6>
                            <span className="light-blue">
                                123, Fashion Street, Jaipur, India
                            </span>
                        </div>


                        {/* Optional: Google Map */}
                        <div className="mb-3">
                            <iframe src="https://maps.google.com/maps?q=jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                        </div>

                        <div className="">
                            <h6 className="fw-bold">Contact With US</h6>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" light-blue me-3 fs-5"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className=" light-blue me-3 fs-5"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className=" light-blue me-3 fs-5"><i className="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className=" light-blue fs-5"><i className="bi bi-youtube"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
