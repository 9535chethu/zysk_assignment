import React from "react";
import {
  Headphones,
  Zap,
  BarChart,
  MessageCircle,
  Command,
  Users,
} from "lucide-react";
import "./Features.css";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <div className="icon-wrapper">
      <Icon size={24} />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

function Features() {
  const features = [
    {
      icon: Headphones,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: Zap,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: BarChart,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    {
      icon: MessageCircle,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: Command,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: Users,
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <span className="features-label">Features</span>
          <h2 className="features-heading">
            Analytics that feels like it's from the future
          </h2>
          <p className="features-subheading">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
