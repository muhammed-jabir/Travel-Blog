import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Comments  from "./Comments";

function BlogDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state;

  if (!post) {
    return (
      <Container className="text-center mt-5">
        <h3>Blog not found</h3>
        <Button variant="dark" onClick={() => navigate("/blog")}>
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ maxWidth: "900px" }}>
      <img
        src={post.image}
        alt={post.title}
        className="w-100 mb-4"
        style={{ borderRadius: "15px", objectFit: "cover", height: "400px" }}
      />
      <h1 style={{ fontWeight: "700" }}>{post.title}</h1>
      <p className="mt-3" style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.7" }}>
        {post.content}
      </p>
      <Button
        variant="dark"
        onClick={() => navigate("/blog")}
        style={{ borderRadius: "25px", marginTop: "20px" }}
      >
        ← Back to Blog
      </Button>
     <Comments />
    </Container>
  );
}

export default BlogDetails;
