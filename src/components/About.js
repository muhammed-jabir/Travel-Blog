import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

function About() {
  return (
    <div style={{ backgroundColor: "#f9fafc", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "url('./images/aboutimage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>About Us</h1>
      </div>

      {/* Content Section */}
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="mb-3" style={{ fontWeight: "700", color: "#1a1a1a" }}>
              Our Story
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
              Welcome to <strong>Travel Blog</strong> — your trusted companion for exploring the world. 
              Our journey began with a simple passion: discovering breathtaking destinations and 
              sharing those experiences with curious travelers like you. 
              From serene beaches to bustling cities, we bring you closer to every corner of the globe 
              through stories, guides, and visuals that inspire adventure.
            </p>
            <p style={{ fontSize: "1.1rem", color: "#555" }}>
              Whether you’re a solo backpacker or a family traveler, we’re here to help you 
              plan meaningful trips filled with culture, beauty, and unforgettable memories.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src="/images/Travel.jpg"
              alt="Travel Journey"
              fluid
              rounded
              style={{ boxShadow: "0 5px 20px rgba(0,0,0,0.2)" }}
            />
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="mb-3" style={{ fontWeight: "700", color: "#1a1a1a" }}>
              Our Mission
            </h2>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", color: "#555" }}>
              Our mission is to make travel more accessible, enjoyable, and culturally enriching. 
              We aim to connect travelers with authentic local experiences and promote sustainable tourism 
              that preserves the natural beauty of our planet.
            </p>
          </Col>
        </Row>

        {/* Team / Author Section */}
        <Row className="justify-content-center text-center">
          <Col md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "15px",
                border: "none",
                backgroundColor: "#fff",
              }}
            >
              <Image
                src="./images/JABIR 55.jpg"
                roundedCircle
                fluid
                className="mb-3"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
              <h4>Muhammed Jabir M T</h4>
              <p style={{ fontSize: "0.95rem", color: "#777" }}>
                Founder & Travel Enthusiast
              </p>
              <p style={{ fontSize: "0.95rem", color: "#555" }}>
                “I created Travel Blog to share my love for discovering hidden gems 
                around the world and to inspire others to travel with purpose and curiosity.”
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
