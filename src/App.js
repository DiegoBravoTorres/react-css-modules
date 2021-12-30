import { Component } from 'react';
import styles from './App.module.css';
import Background from './components/background/background';
import InfoBox from './components/grid/infoBox';
//import Rocket from './components/rocket/rocket';
//import Smoke from './components/rocket/smoke';
import Title from './components/title/title';
//import { Link } from 'react-router-dom';

// Data
import facts from './data/NASA_facts.json'; 
import Drinks from './components/grid/drinks';

//const newsURL = 'https://newsapi.org/v2/everything?q=tesla&from=2021-11-29&sortBy=publishedAt&apiKey=' + process.env.NEWS_API_KEY;
//import news from 'https://newsapi.org/v2/everything?q=tesla&from=2021-11-29&sortBy=publishedAt&apiKey=59fbe883f3c5492996ec0806ac54bbdf';



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
          <InfoBox/>
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