import React from "react";
import styles from "./grid.module.css";
import DrnkImg from "./drinkImg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Component } from "react";

class Drink extends Component {
    constructor(props) {
        super(props);
        this.title = React.createRef();
        this.state = { step: 0 };
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    changeDisplay() {
        this.setState((prevState) => ({
            step: (prevState.step + 1) % 2,
        }));
        console.log(this.state.step);
    }
    render() {
        let drink = this.props.Item;

        if (this.state.step === 0) {
            return (
                <div className="App">
                    <div ref={this.title} onClick={this.changeDisplay} className={styles.card} key={drink.id}>
                        <h5 className={styles.title} key={drink.id}>
                            {drink.strDrink}
                        </h5>
                        <p className={styles.description} key={drink.id}>
                            {drink.strCategory}
                            <br></br>
                            <DrnkImg drinkType={drink.strGlass} />
                        </p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <div ref={this.title} onClick={this.changeDisplay} className={styles.card} key={drink.id}>
                        <h5 className={styles.title} key={drink.id}>
                            {drink.strDrink}
                        </h5>
                        <p className={styles.description} key={drink.id}>
                            {drink.strCategory}
                            <br></br>
                            <DrnkImg drinkType={drink.strGlass} />
                        </p>
                    </div>
                    <div ref={this.title} className={styles.cardInst} key={drink.id}>
                        <Container>
                            <Row>
                                <Col md={3} sm={12} xs={12}>
                                    
                                    <p className={styles.imgDesc}>
                                        <DrnkImg drinkType={drink.strGlass} />
                                    </p>
                                    
                                    <h5 className={styles.titleCard} key={drink.id}>
                                        {drink.strDrink}
                                    </h5>
                                </Col>
                                <Col md={3} sm={12} xs={12}>
                                    <ul className={styles.description} key={drink.id} >
                                        {drink.strIngredient1 && ( <li>{drink.strIngredient1} <strong>{drink.strMeasure1} </strong></li>)}
                                        {drink.strIngredient2 && ( <li>{drink.strIngredient2} <strong>{drink.strMeasure2} </strong></li>)}
                                        {drink.strIngredient3 && ( <li>{drink.strIngredient3} <strong>{drink.strMeasure3} </strong></li>)}
                                        {drink.strIngredient4 && ( <li>{drink.strIngredient4} <strong>{drink.strMeasure4} </strong></li>)}
                                        {drink.strIngredient5 && ( <li>{drink.strIngredient5} <strong>{drink.strMeasure5} </strong></li>)}
                                        {drink.strIngredient6 && ( <li>{drink.strIngredient6} <strong>{drink.strMeasure6} </strong></li>)}
                                        {drink.strIngredient7 && ( <li>{drink.strIngredient7} <strong>{drink.strMeasure7} </strong></li>)}
                                       
                                    </ul>
                                </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <p className={styles.instructions} key={drink.id}>
                                        {drink.strInstructions}
                                    </p>

                                    <p onClick={this.changeDisplay} style={{ padding: "0", margin: "0" }}>
                                        <button className={styles.clsBut}>
                                            <hr />
                                            close
                                        </button>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            );
        }
    }
}

export default Drink;
