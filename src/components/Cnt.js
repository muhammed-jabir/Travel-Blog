import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Cnt() {
  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={6} className="text-center">
          <h5>📍 Our Office</h5>
          <p>123 Travel Street, Wanderlust City</p>
          <h5>📧 Email</h5>
          <p>contact@travelexplorer.com</p>
          <h5>📞 Phone</h5>
          <p>+91 9562530852</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Cnt;
