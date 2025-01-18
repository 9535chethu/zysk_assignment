import React from "react";
import "./Partners.css";
import Boltshift from "./logo/Boltshift.png"
import Lightbox from "./logo/Lightbox.png";
import FeatherDev from "./logo/FeatherDev.png";
import Spherule from "./logo/Spherule.png";
import GlobalBank from "./logo/GlobalBank.png";
import Nietzsche from "./logo/Nietzsche.png";

const Partners = () => {
  const partners = [
    {
      name: "Boltshift",
      logo: Boltshift,
      color: "#0066FF",
    },
    {
      name: "Lightbox",
      logo: Lightbox,
      color: "#000000",
    },
    {
      name: "FeatherDev",
      logo: FeatherDev,
      color: "#4CAF50",
    },
    {
      name: "Spherule",
      logo: Spherule,
      color: "#FF4444",
    },
    {
      name: "GlobalBank",
      logo: GlobalBank,
      color: "#5C6BC0",
    },
    {
      name: "Nietzsche",
      logo: Nietzsche,
      color: "#FF5722",
    },
  ];

  return (
    <section className="partners-section">
      <h2 className="partners-heading">
        Join 4,000+ companies already growing
      </h2>
      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.name} className="partner-item">
            <div className="logo-wrapper">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="partner-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
