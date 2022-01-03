/*import React from "react";

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
            <Nav.Link href="/gin">Gin</Nav.Link>
            <Nav.Link href="/vampiro">Vampiro</Nav.Link>
            <Nav.Link href="/daiquiri">Daiquiri</Nav.Link>
         </Nav>
      </Navbar.Collapse>
   </Container>
</Navbar>

    </div>
    );
}

export default Title;

*/

import React from "react";
import styles from "./nav.module.css";
import { Component } from "react";



class NavBar extends Component {
    constructor() {
        super();
        this.navBar = React.createRef();
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

     openNav() {
      this.navBar.current.style.width = "75%";
    }
    
     closeNav() {
      this.navBar.current.style.width = "0%";
    }
    render() {
            return (
               <div className="App">
               <div className={styles.navbar}>
                   <p className={styles.hamburguer} onClick={this.openNav}>&#9776;<small>Menu</small></p>
                   <h2 className={styles.title}>Drink Selector</h2>
               </div>
           
               <div ref={this.navBar} className={styles.overlay}>
                   <p className={styles.closebtn} onClick={this.closeNav}>&times;</p>
                   <div className={styles.overlaycontent}>
                       <a href="/">Home</a>
                       <a href="/margarita">Margarita</a>
                       <a href="/mojito">Mojito</a>
                       <a href="/bloody">Bloody</a>
                       <a href="/pina">Pina Colada</a>
                       <a href="/gin">Gin</a>
                       <a href="/vampiro">Vampiro</a>
                       <a href="/daiquiri">Daiquiri</a>
                       <a href="/daiquiri">Daiquiri</a>
                       <a href="/daiquiri">Daiquiri</a>
                       <a href="/daiquiri">Daiquiri</a>
                       <a href="/daiquiri">Daiquiri</a>
                   </div>
               </div>
           </div>
           
            );
        }
    
}

export default NavBar;

