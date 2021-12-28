
import { Component } from 'react';
import styles from './App.module.css';
import Background from './components/background/background';
import Grid from './components/grid/grid';
import Rocket from './components/rocket/rocket';
import Smoke from './components/rocket/smoke';
import Title from './components/title/title';

// Data
import facts from './data/NASA_facts.json'; 

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      facts
    }
  }
  updateClick(id){
    let stateCopy = Object.assign({}, this.state);
    stateCopy.facts[id].clicked = true;
    this.setState(stateCopy);


  }
  render(){
    return(
        <div className={styles.App}>
          <Title/>
          <Background/>
          <Grid facts={this.state.facts} updateClick={this.updateClick.bind(this)}/>
          <Rocket/>
         <Smoke/> 
        </div>

    );
  }
};


export default App;
