import React from 'react'
import { Alert, Container, Row } from 'react-bootstrap'
import { NewsletterForm } from './Newsletter'
import { ContactCard } from './Address'
import { NavigationBar } from './Navigationbar';

export function Contact() {
  return (
    <Container className="mt-5">
      <NavigationBar></NavigationBar>
      {/* <h1>Contact</h1>
      <Alert variant="primary" >
          <h1>Contact Us</h1>
        </Alert>
      <h4>Phone</h4>
      <p>+91-99988883, +91-77777772</p>
      <h4>Email</h4>
      <p>admin@gmail.com</p>
      <h4>Address</h4>
      <p>A-189, xyz, pqr, djfsdfsdf</p>

      <hr>
      </hr> */}

      <Row>
        <ContactCard
          name="Nutri Track"
          address="123 Main Street, Khargar, Mumbai"
          phone="555-1234"
          email="nutri@gmail.com"
        ></ContactCard>

        <NewsletterForm></NewsletterForm>
      </Row>
    </Container>
  );
}

