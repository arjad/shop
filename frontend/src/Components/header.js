import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
const Header = () => {
   return (
       <header>
       <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
       <Container>
       <Nav.Link to="/">
        <Navbar.Brand>Vvork-Tech-Store</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ml-auto">
        <Nav.Link to="/cart">
        <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
         </Nav.Link>
         <Nav.Link to="/login">
            <Nav.Link><i className="fas fa-user"></i>Sign In</Nav.Link>
         </Nav.Link>
         </Nav>
          </Navbar.Collapse>
           </Container>
        </Navbar>
     
       </header>
   )
}

export default Header