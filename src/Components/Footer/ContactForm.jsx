import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ContactForm = () => {
  return (
    <div>
      <h1 className="text-center">Get In Touch</h1>
      <Container fluid="md">
        
          <Form>
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="email@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="email" placeholder="Company Name" />
              </Form.Group>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <Form.Group
                className="mb-3 " style={{ height: "50%" }}
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" style={{ height: "100%" }}/>
                <Button className="float-end m-2" variant="secondary" size="md" active >
        Submit
      </Button>
              </Form.Group>
            </Col>
            </Row>
          </Form>
        
      </Container>
      
    </div>
  );
};

export default ContactForm;




