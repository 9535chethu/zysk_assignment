import React, { useState } from "react";
import company from "../company.png";
import image from "./image.jpeg";
import "./Navbar.css";

const ChevronIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="chevron-icon"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const productItems = ["Product 1", "Product 2", "Product 3", "Product 4"];

  const resourceItems = [
    "Resource 1",
    "Resource 2",
    "Resource 3",
    "Resource 4",
  ];

  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={company} alt="Zysk Logo" className="logo-image" />
        </div>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>

            <li className="dropdown">
              <button
                className={`nav-link dropdown-toggle ${
                  activeDropdown === "products" ? "active" : ""
                }`}
                onClick={() => handleDropdownClick("products")}
              >
                Products
                <ChevronIcon />
              </button>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === "products" ? "show" : ""
                }`}
              >
                {productItems.map((item, index) => (
                  <li key={index}>
                    <a className="dropdown-item">{item}</a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="dropdown">
              <button
                className={`nav-link dropdown-toggle ${
                  activeDropdown === "resources" ? "active" : ""
                }`}
                onClick={() => handleDropdownClick("resources")}
              >
                Resources
                <ChevronIcon />
              </button>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === "resources" ? "show" : ""
                }`}
              >
                {resourceItems.map((item, index) => (
                  <li key={index}>
                    <a className="dropdown-item">{item}</a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a href="/pricing" className="nav-link">
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className="profile-section">
          <div className="profile-icon">
            <img src={image} alt="Profile" className="profile-image" />
          </div>
        </div>

        <button
          className={`mobile-menu-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
