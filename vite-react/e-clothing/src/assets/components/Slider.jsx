import React from "react";
import sliderImages from "../javascript/sliderImages"; // 👈 import kiya

function Slider() {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide"
      data-bs-touch="false"
      data-bs-ride="carousel"
     
    >
      <div className="carousel-inner">
        {sliderImages.map((img, index) => (
          <div
            key={img.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={img.src} className="d-block w-100" alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
