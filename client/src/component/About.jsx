import React from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
// import Image from 'react-bootstrap'
import image1 from "./images/image1.jpg";
import hiteshimg from "./images/hiteshimg.jpeg";
import shri from "./images/shri.png";
import { NavigationBar } from "./Navigationbar";

export function About() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Container className="mt-5" id="about">
        <Alert variant="primary">
          <h1>About Us</h1>
        </Alert>
      </Container>
      <Container id="imgcontainer" className="mt-5">
        <Row>
          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                  <p>Name:Ankit Rajankar</p>
                  <p>PRN:230940320019</p>
                  <p>Email:ankitrajankar466@gmail.com</p>
                  <Card.Link href="#">Linkedin</Card.Link>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={shri} />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                  <p>Name:Shrikant Dengle</p>
                  <p>PRN:230940520079</p>
                  <p>Email:shrikantdengle7@gmail.com</p>
                  <Card.Link href="#">Linkedin</Card.Link>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={hiteshimg} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <p>Name:Hitesh Meshram</p>
                  <p>PRN:230940320048</p>
                  <p>Email:hiteshmeshramt@gmail.com</p>
                  <Card.Link href="#">Linkedin</Card.Link>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
