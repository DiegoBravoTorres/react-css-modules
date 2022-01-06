import React from "react";
import styles from "./grid.module.css";

import Header from "../nav/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Drink from "./drinkItem";
import Footer from "../nav/footer";

import "bootstrap/dist/css/bootstrap.min.css";

//import InfoBox from './infoBox'

class Drinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            drinks: [],
        };
    }
    componentDidMount() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.Type.toLowerCase()}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        drinks: result.drinks,
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            ).catch(err => console.log(err));
    }

    render() {
        const { error, isLoaded, drinks } = this.state;
        if (error) {
            return <div key={error.message}>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div key={"loading"} className={styles.loading}>
               <img src={require("../../images/Cocktail-highball-loading.gif")} className={styles.imgloading} alt="Smart Cocktail logo"></img>
              Loading</div>;
        } else {
            return (
                <div >
                    <Header />
                    <h3 className={styles.head}>{this.props.Type}</h3>
                    <hr className={styles.line} />
                    <Container >
                        <Row className={styles.drinkscont} >
                            {drinks.map((drink) => (
                                <Col md={3} sm={6} xs={6} key={`Sst ${drink.strDrink}`}>
                                    <Drink Item={drink} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    <Footer />
                </div>
            );
        }
    }
}

export default Drinks;
