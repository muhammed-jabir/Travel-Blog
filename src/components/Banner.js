import React from "react";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Bali.jpg"
          alt="First slide"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Explore the World</h3>
          <p>Discover your next unforgettable adventure.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/paris.jpg"
          alt="Second slide"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Beautiful Destinations</h3>
          <p>From city lights to tropical beaches.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Tokyo.jpg"
          alt="Third slide"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Plan Your Journey</h3>
          <p>Adventure begins where comfort ends.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
