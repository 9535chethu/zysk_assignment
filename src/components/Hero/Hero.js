import React from "react";
import dashboardImage from "./dashboard.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="new-feature">
        <span className="feature-tag">New feature</span>
        <a href="/pricing" className="feature-link">
          Check out the team dashboard
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="arrow-icon"
          >
            <path
              d="M7.529 3.141 11.724 7.37H2.667v1.333h9.057L7.529 12.862l.943.943 5.81-5.81-5.81-5.81-.943.943z"
              fill="red"
            />
          </svg>
        </a>
      </div>

      <h1 className="hero-title">Beautiful analytics to grow smarter</h1>

      <p className="hero-description">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="hero-buttons">
        <button className="demo-btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="demo-icon"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M8 7L13 10L8 13V7Z" fill="currentColor" />
          </svg>
          Demo
        </button>
        <button className="signup-btn">Sign up</button>
      </div>

      <div className="demo-image">
        <img
          src={dashboardImage}
          alt="Dashboard Demo"
          className="dashboard-image"
        />
      </div>
    </div>
  );
}

export default Hero;
