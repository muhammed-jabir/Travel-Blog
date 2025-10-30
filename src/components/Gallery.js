import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const galleryData = [
  {
    title: "Eiffel Tower, Paris",
    image: "./images/Eifle2.jpg",
    description: "Iconic Parisian landmark offering breathtaking city views."
  },
  {
    title: "Great Wall of China",
    image: "./images/greatwall.jpg",
    description: "Ancient wonder stretching across mountains and history."
  },
  {
    title: "Santorini, Greece",
    image: "./images/greece.jpg",
    description: "Whitewashed buildings, blue domes, and stunning sunsets."
  },
  {
    title: "Taj Mahal, India",
    image: "./images/tajmahal.jpg",
    description: "Marble masterpiece symbolizing eternal love in Agra."
  },
  {
    title: "Machu Picchu, Peru",
    image: "./images/machupichu.jpg",
    description: "Lost Incan city nestled in the Andes Mountains."
  },
  {
    title: "Bali, Indonesia",
    image: "./images/bali.jpg",
    description: "Lush forests, temples, and beaches full of peace."
  }
];

function Gallery() {
  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">🌍 World Travel Gallery</h2>
      <Row className="g-4">
        {galleryData.map((place, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
            <Card className="shadow-lg border-0 h-100 gallery-card">
              <div style={{ height: "250px", overflow: "hidden" }}>
  <Card.Img
    variant="top"
    src={place.image}
    alt={place.title}
    className="gallery-img"
  />
</div>

              <Card.Body>
                <Card.Title>{place.title}</Card.Title>
                <Card.Text className="text-muted">{place.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
