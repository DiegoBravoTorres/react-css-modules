import React from "react";
import styles  from './rocket.module.css';


export default class App extends React.Component{
    render(){
        return (
            <div>
                <img src="../shuttle.png" alt="shutle" className={styles.img}></img>
            </div>

        );
    }
}