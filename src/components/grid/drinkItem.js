import React from 'react';
import styles from './grid.module.css';
import { Component } from 'react';

class Drink extends Component {
    constructor(props) {
      super(props)
      this.title = React.createRef()
      this.changeColor = this.changeColor.bind( this )
    }
  
    changeColor() {
      console.log(this.title)
      if(this.title.current.style.opacity === '1'){
        this.title.current.style.opacity = '0'
      }else{
        this.title.current.style.opacity = '1'
      }
      
    }
    render() {
      return (
        <div className="App">

<div  className={styles.card} /*onClick={() => this.updateBox(drink)}*/ key={this.props.Item.id}>
         <h5 key={this.props.Item.id}>
            {this.props.Item.strDrink}
         </h5>
         <p className={styles.description} key={this.props.Item.id}>
            {this.props.Item.strCategory}
         </p>
         </div>


         <div ref = { this.title } className={styles.cardInfo} onClick = { this.changeColor } key={this.props.Item.id}>
         <p className={styles.description} key={this.props.Item.id}>
            {this.props.Item.strIngredient1} <strong>{this.props.Item.strMeasure1} </strong><br></br>
            {this.props.Item.strIngredient2} <strong>{this.props.Item.strMeasure2} </strong><br></br>
            {this.props.Item.strIngredient3} <strong>{this.props.Item.strMeasure3} </strong><br></br>
            {this.props.Item.strIngredient4} <strong>{this.props.Item.strMeasure4} </strong><br></br>
            {this.props.Item.strIngredient5} <strong>{this.props.Item.strMeasure5} </strong><br></br>
            {this.props.Item.strIngredient6} <strong>{this.props.Item.strMeasure6} </strong><br></br>
         </p>
         </div>

     
 
        </div>
      );
    }
  }

  export default Drink;