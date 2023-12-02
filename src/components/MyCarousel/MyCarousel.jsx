import React from "react";
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const MyCarousel = () => {
  return (
    <>
      <Container className="mycarousel">
        <Carousel className="bg-color">
          <Carousel.Item>
            <Row className="align-items-center ps-5">
              <Col sm={7}>
                <h2>LCD to waste time</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, iste? consectetur, adipisicing elit. Eius, iste?
                </p>
                <h2 className="price">$1000</h2>
                <button className="buy-btn">BUY NOW</button>
              </Col>
              <Col sm={5}>
                <img
                  className="w-100"
                  src="./images/banner-images/tv.png"
                  alt=""
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="align-items-center ps-5">
              <Col sm={7}>
                <h2>Cool dude headphone</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, iste? consectetur, adipisicing elit. Eius, iste?
                </p>
                <h2 className="price">$500</h2>
                <button className="buy-btn">BUY NOW</button>
              </Col>
              <Col sm={5}>
                <img
                  className="w-100"
                  src="./images/banner-images/headphone.png"
                  alt=""
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="align-items-center ps-5">
              <Col sm={7}>
                <h2>Y-box to waste time</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, iste? consectetur, adipisicing elit. Eius, iste?
                </p>
                <h2 className="price">$600</h2>
                <button className="buy-btn">BUY NOW</button>
              </Col>
              <Col sm={5}>
                <img
                  className="w-100"
                  src="./images/banner-images/xbox.png"
                  alt=""
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default MyCarousel;
