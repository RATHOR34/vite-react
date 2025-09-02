import React, { useState } from "react";
import { information, faqs } from "../javascript/faq";

function Faq() {
  // isOpen me open hone wale index ka store rakhenge


  const [isOpen, setIsOpen] = useState(null);

  const toggleFAQ = (i) => {
    setIsOpen(isOpen === i ? null : i); // dobara click par band kar do
  };

  return (
    <div style={{marginTop:"90px"}}>
      {/* General Information Section */}
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <div className="p-4">
            <div className="row pt-2">
              <h1 className="fw-bold">FaQs. General Information</h1>
            </div>
            <div className="row">
              {information.map((data) => (
                <div className="col-md-6 py-3" key={data.id}>
                  <p className="fw-bold">{data.informatio1}</p>
                  <p className="text-muted">{data.detail1}</p>
                  <p className="fw-bold">{data.information2}</p>
                  <p className="text-muted">{data.detail2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="container py-5">
        <div className="row m-auto">
          <div className="col-md-7">
            <h5 className="fw-bold py-4 pt-0">
              <a href="#faq" className="text-decoration-none text-black">
                Terms & Conditions / Privacy Policy
              </a>
            </h5>

            {faqs.map((faq, index) => (
              <div
                className={`faq-box text-muted mb-3 border-bottom pb-2 ${
                  isOpen === index ? "active" : ""
                }`}
                key={index}
                
              >
                {/* Question */}
                <div
                  className="faq-question d-flex justify-content-between align-items-center"
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer" }}
                >
                  <p className="mb-0">{faq.question}</p>
                  <span className = {isOpen === index ? "bi bi-chevron-up" : "bi bi-chevron-down"}></span>
                </div>

                {/* Answer */}
                <div className="faq-answer">
                  <p className="mt-2 text-muted">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="col-md-5 p-4 border border-4">
            <h5 className="fw-bold">Ask a Question</h5>
            <p className="text-muted">
              Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing a
              dignissim eu a ad venenatis. Non vivamus enim himenaeos porta id
              morbi montes ut sem scelerisque in
            </p>
            <div className="form-section">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email(required)
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn text-white"
                    style={{ backgroundColor: "#008DB1" }}
                  >
                    Ask a question
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
