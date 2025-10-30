import React from "react";
import { Card, Button } from "react-bootstrap";

function Blogcard({ image, title, description }) {
  return (
    <Card style={{ width: "20rem", margin: "15px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default Blogcard;
