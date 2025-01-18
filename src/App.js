import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners";
import Features from "./components/Features/Features";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import BlogPosts from "./components/BlogPosts";
import FreeTrialBanner from "./components/FreeTrialBanner";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Testimonial />
      <FAQ />
      <BlogPosts />
      <FreeTrialBanner />
      <Footer />
    </div>
  );
}

export default App;
