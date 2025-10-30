import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CommentSection from "./Comments";

function Blog() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "10 Hidden Beaches You Must Visit",
      image: "/images/Beach.jpg",
      excerpt: "Discover the untouched beauty of secret coastlines across the world.",
      content:
        "Discover the untouched beauty of secret coastlines across the world. From Bali’s hidden coves to Greece’s secret bays, these beaches remain nature’s best-kept secrets. Visit during sunrise or sunset to experience absolute tranquility and capture breathtaking photographs.",
    },
    {
      id: 2,
      title: "A Foodie’s Guide to Tokyo",
      image: "/images/TokyoFood.jpg",
      excerpt: "From sushi to ramen, explore Japan’s vibrant food culture like a local.",
      content:
        "Tokyo offers a culinary experience like no other. Dive into local food markets, savor authentic sushi from Tsukiji, or enjoy ramen from hidden alleys. Japan’s blend of street food and fine dining makes it a paradise for every foodie.",
    },
    {
      id: 3,
      title: "Solo Travel Tips for 2025",
      image: "/images/Solotravel.jpg",
      excerpt: "Travel confidently with these essential solo adventure tips.",
      content:
        "Solo travel in 2025 is more rewarding than ever. Use smart travel apps, pack light, and stay connected. Meet locals, embrace cultural differences, and document your journey—it’s an empowering way to rediscover yourself.",
    },
    {
      id: 4,
      title: "Best Time to Visit Paris",
      image: "/images/parisnight.jpg",
      excerpt: "Experience the magic of Paris at its most beautiful seasons.",
      content:
        "Paris shines year-round, but spring and fall bring the perfect balance of weather and beauty. Visit iconic landmarks, relax by the Seine, and explore cozy cafés while the city blooms with art, fashion, and romance.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", paddingTop: "40px" }}>
      <Container>
        <h1 className="text-center mb-5" style={{ fontWeight: "700" }}>
          Travel Blog Posts
        </h1>
        <Row className="g-4">
          {blogs.map((post) => (
            <Col md={6} lg={3} sm={12} key={post.id}>
              <Card
                className="shadow-sm border-0 h-100"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <Card.Img
                  variant="top"
                  src={post.image}
                  alt={post.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text style={{ color: "#555" }}>{post.excerpt}</Card.Text>
                  <Button
                    variant="dark"
                    style={{ borderRadius: "25px" }}
                    onClick={() => navigate(`/blog/${post.id}`, { state: post })}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <CommentSection />
    </div>
  );
}


export default Blog;
