import React from "react";
import styles from "./grid.module.css";
import DrnkImg from "./drinkImg";
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
            step: (prevState.step + 1)  % 3
        }));
        console.log(this.state.step);
    }
    render() {
        let drink = this.props.Item;

        if (this.state.step === 0) {
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
        } else if (this.state.step === 1){
            return (
                <div className="App">
                    <div ref={this.title} className={styles.cardInfo} key={drink.id} onClick={this.changeDisplay}>
                     
                            <ul className={styles.description} key={drink.id} style={{padding: "0"}} >
                                { drink.strIngredient1 && <li> {drink.strIngredient1} <strong>{drink.strMeasure1} </strong></li>}
                                { drink.strIngredient2 && <li> {drink.strIngredient2} <strong>{drink.strMeasure2} </strong></li>}
                                { drink.strIngredient3 && <li> {drink.strIngredient3} <strong>{drink.strMeasure3} </strong></li>}
                                { drink.strIngredient4 && <li> {drink.strIngredient4} <strong>{drink.strMeasure4} </strong></li>}
                                { drink.strIngredient5 && <li> {drink.strIngredient5} <strong>{drink.strMeasure5} </strong></li>}
                                { drink.strIngredient6 && <li> {drink.strIngredient6} <strong>{drink.strMeasure6} </strong></li>}
                                { drink.strIngredient7 && <li> {drink.strIngredient7} <strong>{drink.strMeasure7} </strong></li>}
                                { drink.strIngredient8 && <li> {drink.strIngredient8} <strong>{drink.strMeasure8} </strong></li>}
                                { drink.strIngredient9 && <li> {drink.strIngredient9} <strong>{drink.strMeasure9} </strong></li>}
                            </ul>
                                                   
                     
                    </div>
                </div>
            );
        }else{
            return(
                <div className="App">
                    <div ref={this.title} className={styles.cardInst} key={drink.id} onClick={this.changeDisplay}>
                        <p className={styles.instructions} key={drink.id}>
                        {drink.strInstructions}
                        </p>
                    </div>
                </div>

            )
        }
    }
}

export default Drink;
