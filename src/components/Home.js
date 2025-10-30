import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

function Home() {
  const destinations = [
    {
      title: "Paris, France",
      image: "/images/paris.jpg",
      text: "Experience romance and timeless architecture in the heart of France.",
    },
    {
      title: "Bali, Indonesia",
      image: "/images/Bali.jpg",
      text: "Relax on tropical beaches and explore vibrant island culture.",
    },
    {
      title: "Tokyo, Japan",
      image: "/images/Tokyo.jpg",
      text: "Discover the perfect blend of tradition and modern innovation.",
    },
    {
      title: "New York, USA",
      image: "/images/Newyork.jpg",
      text: "Feel the energy of the city that never sleeps.",
    },
  ];

  const slides = [
    {
      img: "/images/Travel.jpg",
      title: "Discover the World",
      desc: "Your journey begins here — adventure awaits at every corner.",
    },
    {
      img: "/images/paris.jpg",
      title: "Romance in Paris",
      desc: "Stroll along the Seine and fall in love with the City of Lights.",
    },
    {
      img: "/images/Bali.jpg",
      title: "Tropical Paradise",
      desc: "Experience the magic of Bali’s beaches and lush greenery.",
    },
    {
      img: "/images/Tokyo.jpg",
      title: "Vibrant Tokyo",
      desc: "Where tradition meets futuristic modern life.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8fafc" }}>
      {/* 🌍 Hero Carousel Section */}
      <Carousel fade interval={4000} indicators={true} controls={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                position: "relative",
                height: "80vh",
                overflow: "hidden",
              }}
            >
              <img
                className="d-block w-100"
                src={slide.img}
                alt={slide.title}
                style={{
                  height: "80vh",
                  objectFit: "cover",
                  filter: "brightness(70%)",
                }}
              />

              {/* Gradient Overlay Text */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 20px",
                }}
              >
                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: "700",
                    marginBottom: "15px",
                    textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    maxWidth: "700px",
                    textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
                  }}
                >
                  {slide.desc}
                </p>
                <Button
                  href="/gallery"
                  variant="light"
                  style={{
                    marginTop: "25px",
                    fontWeight: "600",
                    borderRadius: "30px",
                    padding: "10px 25px",
                  }}
                >
                  Explore Destinations
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* ✈️ Featured Destinations */}
      <Container className="py-5">
        <h2 className="text-center mb-4" style={{ fontWeight: "700" }}>
          Featured Destinations
        </h2>
        <Row className="g-4">
          {destinations.map((place, index) => (
            <Col md={3} sm={6} xs={12} key={index}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <div style={{ height: "220px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={place.image}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="card-img-hover"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{place.title}</Card.Title>
                  <Card.Text style={{ color: "#555", fontSize: "0.95rem" }}>
                    {place.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 🌏 About Section */}
      <Container
        fluid
        className="py-5"
        style={{ backgroundColor: "#fff", textAlign: "center" }}
      >
        <h2 style={{ fontWeight: "700" }}>Explore. Inspire. Travel.</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto", color: "#555" }}>
          At <strong>Travel Blog</strong>, we believe that travel opens hearts
          and broadens minds. From hidden waterfalls to bustling streets, every
          journey has a story to tell. Let’s explore the beauty of our world
          together — one adventure at a time.
        </p>
        <Button
          href="/about"
          variant="dark"
          style={{
            fontWeight: "600",
            borderRadius: "30px",
            padding: "10px 25px",
          }}
        >
          Learn More About Us
        </Button>
      </Container>
    </div>
  );
}

export default Home;
