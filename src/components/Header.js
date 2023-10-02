import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

function Header({setSearchText, setSearchRating}) {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/'><h1 style={{color:'green'}}>SHOPIFY</h1></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <Link to='/products'><NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.1">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Documentary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Others
              </NavDropdown.Item>
            </NavDropdown>
            <Link to='/contact'><Nav.Link href="#home">Contact</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
        
      </Form>
      <Rating
          name="simple-controlled"
          onChange={(event, newValue) => {
          setSearchRating(newValue);
        }}
       />
        <Form inline style={{marginLeft:'25px'}}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e)=>setSearchText(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>

        </Row>
      </Form>
      </Container>
    </Navbar>
  );
}

export default Header;