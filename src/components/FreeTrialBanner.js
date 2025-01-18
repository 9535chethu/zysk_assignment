import React from "react";
import "./FreeTrialBanner.css";

const FreeTrialBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2 className="banner-title">Start your free trial</h2>
        <p className="banner-description">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="banner-buttons">
          <button className="btn-learn-more">Learn more</button>
          <button className="btn-get-started">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialBanner;
