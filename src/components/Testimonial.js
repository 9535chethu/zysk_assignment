import React from "react";
import sisphus from "./sisyphus.png"
import testimonial__author from "./blog3.jpeg"
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="sisyphus-testimonial">
      {/* Sisyphus Logo */}
      <div className="sisyphus-testimonial__logo-container">
        <div className="sisyphus-testimonial__logo-wrapper">
          <img
            src={sisphus}
            alt="Sisyphus Logo"
            className="sisyphus-testimonial__logo-image"
          />
          {/* <span className="sisyphus-testimonial__logo-text">Sisyphus</span> */}
        </div>
      </div>

      {/* Quote */}
      <h2 className="sisyphus-testimonial__quote">
        We've been using Untitled to kick start every new project and can't
        imagine working without it.
      </h2>

      {/* Author Info */}
      <div className="sisyphus-testimonial__author">
        <div className="sisyphus-testimonial__author-image-wrapper">
          <img
            src={testimonial__author}
            alt="Profile"
            className="sisyphus-testimonial__author-image"
          />
        </div>
        <div className="sisyphus-testimonial__author-info">
          <h3 className="sisyphus-testimonial__author-name">Candice Wu</h3>
          <p className="sisyphus-testimonial__author-title">
            Product Manager, Sisyphus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
