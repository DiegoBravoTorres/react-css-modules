
import React from "react";
import styles from "./nav.module.css";
import { Component } from "react";

class NavBar extends Component {
    constructor() {
        super();
        this.navBar = React.createRef();
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
        const { innerWidth: width } = window;
        if (width < 810) this.navBar.current.style.width = "75%";
        else this.navBar.current.style.width = "25%";
    }

    closeNav() {
        this.navBar.current.style.width = "0%";
    }
    render() {
        return (
            <div className="App">
                <div className={styles.navbar}>
                    <p className={styles.hamburguer} onClick={this.openNav}>
                        <img src="https://img.icons8.com/ios/50/000000/menu--v3.png" alt="menu"></img>
                        <small>Menu</small>
                    </p>
                    <img src={require("../../images/sCocktail.png")} className={styles.title} alt="Smart Cocktail logo"></img>
                </div>

                <div ref={this.navBar} className={styles.overlay}>
                    <p className={styles.closebtn} onClick={this.closeNav}>
                        &times;
                    </p>
                    <div className={styles.overlaycontent}>
                        <a href="/">Home</a>

                        <a href="/bloody">Bloody</a>
                        <a href="/caipirinha">Caipirinha</a>
                        <a href="/chocolate">Chocolate</a>
                        <a href="/collins">Collins</a>
                        <a href="/daiquiri">Daiquiri</a>
                        <a href="/irish">Irish Style</a>
                        <a href="/fizz">Fizz</a>
                        <a href="/gimlet">Gimlet</a>
                        <a href="/gin">Gin</a>
                        <a href="/iced-tea">Iced Tea</a>
                        <a href="/lemonade">Lemonade</a>
                        <a href="/mimosa">Mimosa</a>
                        <a href="/mai-tai">Mai Tai</a>
                        <a href="/manhattan">Manhattan</a>
                        <a href="/margarita">Margarita</a>
                        <a href="/martini">Martini</a>
                        <a href="/martinez">Martinez</a>
                        <a href="/mojito">Mojito</a>
                        <a href="/mule">Mule</a>
                        <a href="/negroni">Negroni</a>
                        <a href="/paloma">Paloma</a>
                        <a href="/pina">Pina Colada</a>
                        <a href="/punch">Punch</a>
                        <a href="/sangria">Sangria</a>
                        <a href="/sazerac">Sazerac</a>
                        <a href="/sidecar">Sidecar</a>
                        <a href="/spritz">Spritz</a>
                        <a href="/vampiro">Vampiro</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
