import { Component } from 'react';
import styles from './App.module.css';
import Background from './components/background/background';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { Link } from 'react-router-dom';

// Data
//import facts from './data/NASA_facts.json'; 
import Home from './components/home/home';
import Drinks from './components/grid/drinks';
import NotFound from './components/nav/404';


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
           <Route exact path="/" element={ <Home/>} />
        
           
              <Route exact path="/caipirinha" element={<Drinks Type='Caipirinha'/>} />
              <Route exact path="/chocolate" element={<Drinks Type='Chocolate'/>} />
              <Route exact path="/collins" element={<Drinks Type='Collins'/>} />
              <Route exact path="/bellini" element={<Drinks Type='Bellini'/>} />
              <Route exact path="/iced-tea" element={<Drinks Type='Iced Tea'/>} />
              <Route exact path="/irish" element={<Drinks Type='Irish'/>} />
              <Route exact path="/fizz" element={<Drinks Type='Fizz'/>} />
              <Route exact path="/manhattan" element={<Drinks Type='Manhattan'/>} />
              <Route exact path="/margarita" element={<Drinks Type='Margarita'/>} />
              <Route exact path="/martinez" element={<Drinks Type='Martinez'/>} />
              <Route exact path="/mojito" element={<Drinks Type='Mojito'/>} />
              <Route exact path="/mai-tai" element={<Drinks Type='Mai Tai'/>} />
              <Route exact path="/martini" element={<Drinks Type='Martini'/>} />
              <Route exact path="/mimosa" element={<Drinks Type='Mimosa'/>} />
              <Route exact path="/mule" element={<Drinks Type='Mule'/>} />
              <Route exact path="/negroni" element={<Drinks Type='Negroni'/>} />
              <Route exact path="/lemonade" element={<Drinks Type='Lemonade'/>} />
              <Route exact path="/bloody" element={<Drinks Type='Bloody'/>} />
              <Route exact path="/paloma" element={<Drinks Type='Paloma'/>} />
              <Route exact path="/punch" element={<Drinks Type='Punch'/>} />
              <Route exact path="/pina" element={<Drinks Type='Pina Colada'/>} />
              <Route exact path="/gin" element={<Drinks Type='Gin'/>} />
              <Route exact path="/gimlet" element={<Drinks Type='Gimlet'/>} />
              <Route exact path="/sidecar" element={<Drinks Type='Sidecar'/>} />
              <Route exact path="/sangria" element={<Drinks Type='Sangria'/>} />
              <Route exact path="/spritz" element={<Drinks Type='Spritz'/>} />
              <Route exact path="/sazerac" element={<Drinks Type='Sazerac'/>} />
              <Route exact path="/vampiro" element={<Drinks Type='Vampiro'/>} />
              <Route exact path="/daiquiri" element={<Drinks Type='Daiquiri'/>} />
             
              <Route exact path='*' element={NotFound} />
         
              
              
            
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