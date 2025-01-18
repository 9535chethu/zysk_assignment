import React from "react";
import { BarChart2, Zap, Shield } from "lucide-react";
import "./Features.css";

const features = [
  {
    icon: BarChart2,
    title: "Analytics that feel like Air Force Sales",
    description:
      "Get insights into your data with our powerful analytics tools",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Experience blazing fast load times and real-time updates",
  },
  {
    icon: Shield,
    title: "Enterprise-grade Security",
    description:
      "Your data is protected with industry-leading security measures",
  },
];

function Features() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <Icon />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
