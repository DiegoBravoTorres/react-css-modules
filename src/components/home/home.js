import React from "react";
import { Component } from 'react';
import styles from "./home.module.css";

import Header from '../nav/header';
import Footer from '../nav/footer';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Home extends Component{
    render(){
        return (
        <div>
            <Header/> 
            <Container key={this.props.Type}>
                        <Row className={styles.main}>
                                <Col md={6} sm={12} xs={12} >
                                <h2>Find the Best Selection of Cocktail Recipes</h2>
                                <p>Browse our menu and find recipes by type of drink.</p>
                                </Col>
                                <Col md={6} sm={12} xs={12} >
                                <img src={require("../../images/home-bck.png")} className={styles.image} alt="Home Background"></img>
                                </Col>
                        </Row>
                    </Container>

                    <div className={styles.secondary}>
                                <Col md={12} sm={12} xs={12} >
                                <h2>Just keep tapping</h2>
                                
                                <p><strong>Tap 1 </strong><br></br>Get the ingredient list</p>
                                <p><strong>Tap 2 </strong><br></br>Get the instructions</p>
                                </Col>
                            
                        </div>
            <Footer/> 
            </div>);
    }
    
}

export default Home;