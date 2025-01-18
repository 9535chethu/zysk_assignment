import React from "react";
import company from "./company.png";
import "./Footer.css";

const Footer = () => {
  const footerData = {
    product: {
      title: "Product",
      links: [
        "Overview",
        "Features",
        { name: "Solutions", badge: "New" },
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    company: {
      title: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    resources: {
      title: "Resources",
      links: [
        "Blog",
        "Newsletter",
        "Events",
        "Help centre",
        "Tutorials",
        "Support",
      ],
    },
    useCases: {
      title: "Use cases",
      links: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS centre",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    social: {
      title: "Social",
      links: [
        "Twitter",
        "LinkedIn",
        "Facebook",
        "GitHub",
        "AngelList",
        "Dribbble",
      ],
    },
    legal: {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {Object.entries(footerData).map(([key, section]) => (
            <div key={key} className="footer-column">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">
                      {typeof link === "object" ? (
                        <span className="link-with-badge">
                          {link.name}
                          <span className="badge">{link.badge}</span>
                        </span>
                      ) : (
                        link
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <img src={company} alt="Zysk Logo" />
          </div>
          <div className="footer-copyright">
            © 2077 zysktechnologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
