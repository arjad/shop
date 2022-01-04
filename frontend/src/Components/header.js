import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const Header = () => {
   return (
     <>
     <LinkContainer to="/">
         <Nav.Link >
            <Navbar.Brand>Vvork-Tech-Store</Navbar.Brand>
         </Nav.Link>
      </LinkContainer>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
         <Navbar.Collapse className="ml-auto">
            <LinkContainer to="/cart">
                <Nav.Link >
                    <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
               <Nav.Link >
                   <Nav.Link><i className="fas fa-user"></i>Sign In</Nav.Link>
               </Nav.Link>
            </LinkContainer>
         </Navbar.Collapse>
      </Navbar.Collapse>
     </>
       
   )
}

export default Header