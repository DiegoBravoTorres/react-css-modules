import React from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Title = () =>{
    return (
<div>
<Navbar bg="light" expand="lg">
   <Container>
      <Navbar.Brand  href="#home">Drink Selector</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/margarita">Margarita</Nav.Link>
            <Nav.Link href="/mojito">Mojito</Nav.Link>
            <Nav.Link href="/martini">Martini</Nav.Link>
            <Nav.Link href="/bloody">Bloody</Nav.Link>
            <Nav.Link href="/pina">Pina Colada</Nav.Link>
            
         </Nav>
      </Navbar.Collapse>
   </Container>
</Navbar>
    </div>
    );
}

export default Title;