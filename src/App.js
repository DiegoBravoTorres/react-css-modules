import { Component } from 'react';
import styles from './App.module.css';
import Background from './components/background/background';
//import Rocket from './components/rocket/rocket';
//import Smoke from './components/rocket/smoke';
import Title from './components/title/title';
//import { Link } from 'react-router-dom';

// Data
//import facts from './data/NASA_facts.json'; 
import Drinks from './components/grid/drinks';



class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      drink:"welcome"
    }
  }
  
  updateClick(name){
    let stateCopy = Object.assign({}, this.state);
    stateCopy.state = name;
    this.setState(stateCopy);
  }
  
  render(){
    return(
        <div className={styles.App}>
          
          <Title/>
         
          <Drinks Type='Margarita'/>
          <Drinks Type='Gin'/>
          <Drinks Type='Bloody'/>
          <Drinks Type='Mojito'/>
          <Drinks Type='Colada'/>
          <Background/>
      
           {/* <Grid facts={this.state.facts} updateClick={this.updateClick.bind(this)}/>
            <Rocket/>
            <Smoke/> */}
        </div>

    );
  }
};


export default App;