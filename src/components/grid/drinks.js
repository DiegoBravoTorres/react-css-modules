import React from 'react';
import styles from './grid.module.css';

import Header from '../nav/header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Drink from './drinkItem';
import Footer from '../nav/footer';

import 'bootstrap/dist/css/bootstrap.min.css';

//import InfoBox from './infoBox'


class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      drinks: []
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


  render() {
    const { error, isLoaded, drinks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className={styles.loading}>Loading</div>;
    } else {
      return (
        
<div key={this.props.Type}>
<Header/>
   <h3 className={styles.head}>
      {this.props.Type} 
   </h3>

   <hr className={styles.line}/>
   <Container key={this.props.Type}>
      <Row className={styles.drinkscont}  >
         {drinks.map(drink => (
         <Col md={3} sm={6} xs={6} key={drink.id}>
          <Drink Item={drink}/>
         
         </Col>
         ))
    }
      </Row>
   </Container>
   <Footer/>
</div>


  
      );
    }
  }
}

export default Drinks;