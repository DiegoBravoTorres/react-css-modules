import React from "react";
import styles from "./grid.module.css";
import DrnkImg from "./drinkImg";
import { Component } from "react";

class Drink extends Component {
    constructor(props) {
        super(props);
        this.title = React.createRef();
        this.state = { clicked: false };
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    changeDisplay() {
        this.setState((prevState) => ({
            clicked: !prevState.clicked,
        }));

        console.log(this.state.clicked);
    }
    render() {
        let drink = this.props.Item;

        if (!this.state.clicked) {
            return (
                <div className="App">
                    <div ref={this.title} onClick={this.changeDisplay} className={styles.card} key={drink.id}>
                        <h5 className={styles.title} key={drink.id}>{drink.strDrink}</h5>
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
                    <div ref={this.title} className={styles.cardInfo} key={drink.id} onClick={this.changeDisplay}>
                        <p className={styles.description} key={drink.id}>
                          
                            
                        
                        
                            
                            {drink.strIngredient1} <strong>{drink.strMeasure1} </strong>
                            <br></br>
                            {drink.strIngredient2} <strong>{drink.strMeasure2} </strong>
                            <br></br>
                            {drink.strIngredient3} <strong>{drink.strMeasure3} </strong>
                            <br></br>
                            
                            {drink.strIngredient4} <strong>{drink.strMeasure4} </strong>
                            <br></br>
                            {drink.strIngredient5} <strong>{drink.strMeasure5} </strong>
                            <br></br>
                            {drink.strIngredient6} <strong>{drink.strMeasure6} </strong>
                            
                           
                            
                        </p>
                    </div>
                </div>
            );
        }
    }
}

export default Drink;
