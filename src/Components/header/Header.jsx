import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';



const Header = () => {
    return (
      <>
      {/* <ProgressBar>
      
      
    </ProgressBar> */}
    {/* <ProgressBar variant="danger" now={100} key={1} /> */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  href="#icon">Vr technocraft</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              
          </Nav>
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Our Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fire-alarm System</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                PA System
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">VESDA System</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Access Control
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fire Suppression System
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fire Extinguishers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fire Hydrant System
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Rodent Repellent System
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                 Water Leak Detection
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                CCTV
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Organization</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Solution</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                News Overviews
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
}

export default Header;
