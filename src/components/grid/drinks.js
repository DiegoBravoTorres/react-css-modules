import React from 'react';
import styles from './grid.module.css';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

//import InfoBox from './infoBox'


class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      drinks: [],
      selectedDrink: "wel"
    };
  }
  componentDidMount() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.Type.toLowerCase()}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            drinks: result.drinks
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  updateBox(drink){
    console.log(drink.strDrink);
  }

  render() {
    const { error, isLoaded, drinks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
<div key={this.props.Type}>
   <h3 className={styles.title}>
      {this.props.Type} 
   </h3>
   <Container key={this.props.Type}>
      <Row className={styles.drinkscont}  >
         {drinks.map(drink => (
         <Col md={3} key={drink.id}>
         <div className={styles.card} onClick={() => this.updateBox(drink)} key={drink.id}>
         <h5 key={drink.id}>
            {drink.strDrink}
         </h5>
         <p className={styles.description} key={drink.id}>
            {drink.strCategory}
         </p>
         </div>


         <div className={styles.cardInfo} onClick={() => this.updateBox(drink)} key={drink.id}>
         <p className={styles.description} key={drink.id}>
            {drink.strIngredient1} <strong>{drink.strMeasure1} </strong><br></br>
            {drink.strIngredient2} <strong>{drink.strMeasure2} </strong><br></br>
            {drink.strIngredient3} <strong>{drink.strMeasure3} </strong><br></br>
            {drink.strIngredient4} <strong>{drink.strMeasure4} </strong><br></br>
            {drink.strIngredient5} <strong>{drink.strMeasure5} </strong><br></br>
            {drink.strIngredient6} <strong>{drink.strMeasure6} </strong><br></br>
         </p>
         </div>
         </Col>
         ))
    }
      </Row>
   </Container>
   
</div>


  
      );
    }
  }
}

export default Drinks;