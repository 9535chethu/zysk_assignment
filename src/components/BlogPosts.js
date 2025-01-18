import React from "react";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import blog1 from "./blog1.jpeg";
import blog2 from "./blog2.jpeg";
import blog3 from "./blog3.jpeg";
import "./BlogPosts.css";

const BlogPosts = () => {
  const blogPosts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: image1,
      author: {
        name: "Olivia Rhye",
        date: "20 Jan 2024",
        avatar: blog1,
      },
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      image: image2,
      author: {
        name: "Phoenix Baker",
        date: "19 Jan 2024",
        avatar: blog2,
      },
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      image: image3,
      author: {
        name: "Lana Steiner",
        date: "18 Jan 2024",
        avatar: blog3,
      },
    },
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <div className="blog-header-text">
          <span className="our-blog">Our blog</span>
          <h2 className="blog-title">Latest blog posts</h2>
          <p className="blog-description">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="view-all-btn">View all posts</button>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">{post.category}</span>
              <div className="blog-title-row">
                <h3 className="post-title">{post.title}</h3>
                <span className="arrow-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M17 8v4a1 1 0 0 1-2 0v-1.586l-6.293 6.293a1 1 0 1 1-1.414-1.414L13.586 9H12a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1z"
                      style={{ fill: "#1c1b1e" }}
                      data-name="Up Right"
                    />
                  </svg>
                </span>
              </div>
              <p className="post-description">{post.description}</p>
              <div className="author-info">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="author-avatar"
                />
                <div className="author-details">
                  <span className="author-name">{post.author.name}</span>
                  <span className="post-date">{post.author.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
