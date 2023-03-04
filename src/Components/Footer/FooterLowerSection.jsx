import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  Linkedin,
  Github,
  House,
  Phone,
  Envelope,
  Telephone,
  Building,
} from "react-bootstrap-icons";

const FooterLowerSection = () => {
  return (
    <div>
      <div bgColor="light" className="text-center text-lg-start text-muted">
        <section className="">
          <Container className="text-center text-md-start mt-5">
            <Row className="mt-3">
              <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <Building icon="gem" className="me-3" />
                  Vr Technocraft
                </h6>
                <p>
                  Here you can use rows and columns to organize your div
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </Col>

              <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Information</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy & Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Support & Service
                  </a>
                </p>
              </Col>

              <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Business</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Marketing Solution
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Data Intelligent
                    </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Tech Solution
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </Col>

              <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  <House icon="home" className="me-2" />
                  J-102, Vishwa City-2, R.C.Technical Road, Ahmedabad-380061, Gujrat, India
                </p>
                <p>
                  <Envelope icon="envelope" className="me-3" />
                  info@example.com
                </p>
                <p>
                  <Phone icon="phone" className="me-3" /> + 91-96 2444 2333
                </p>
                <p>
                  <Telephone icon="print" className="me-3" /> + 91-98 2444 2333
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <div
          className="d-flex justify-content-around p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          
          <div className="right">
            <span>© 2023 Copyright:&nbsp;</span>
            <a className="text-reset fw-bold" href="https://vrtechnocraft.com/">
              vrtechnocraft.com
            </a>
          </div>
          <div className="left">
            <h5>Follow Us</h5>
            <div>
              <a href="" className="me-4 text-reset">
                <Facebook fab icon="facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <Twitter fab icon="twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <Google fab icon="google" />
              </a>
              <a href="" className="me-4 text-reset">
                <Instagram fab icon="instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <Linkedin fab icon="linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <Github fab icon="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLowerSection;
