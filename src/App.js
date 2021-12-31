import { Component } from 'react';
import styles from './App.module.css';
import Background from './components/background/background';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <BrowserRouter>
           <Routes>
              <Route exact path="/margarita" element={<Drinks Type='Margarita'/>} />
              <Route exact path="/mojito" element={<Drinks Type='Mojito'/>} />
              <Route exact path="/martini" element={<Drinks Type='Martini'/>} />
              <Route exact path="/bloody" element={<Drinks Type='Bloody'/>} />
              <Route exact path="/pina" element={<Drinks Type='Pina Colada'/>} />
              <Route exact path="/daiquiri" element={<Drinks Type='Daiquiri'/>} />
          </Routes>
          </BrowserRouter>
          
          <Background/>
      
           {/* <Grid facts={this.state.facts} updateClick={this.updateClick.bind(this)}/>
            <Rocket/>
            <Smoke/> */}
        </div>

    );
  }
};


export default App;