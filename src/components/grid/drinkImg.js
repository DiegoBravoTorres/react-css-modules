import React from "react";
import styles from "./drinkImg.module.css";

const drinkImg = props => {
  let { drinkType } = props;

  if (drinkType === "Cocktail glass" || drinkType === "Cocktail Glass" || drinkType === "Martini Glass") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-cocktail.png")} alt={ drinkType }></img>;
  } else 
  if (drinkType === "Old-Fashioned glass" || drinkType === "Old-fashioned glass") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-old-fashioned.png")} alt={ drinkType }></img>;
  } else 
  if (drinkType === "Margarita/Coupette glass") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-margarita.png")} alt={ drinkType }></img>;
  } else 
  if (drinkType === "Jar" || drinkType === "jar") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-jar.png")} alt={ drinkType }></img>;
  } else 
  if (drinkType === "Highball glass" || drinkType === "Highball Glass") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-highball.png")} alt={ drinkType }></img>;
  } else 
  if (drinkType === "White wine glass" || drinkType === "Wine Glass") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-white-wine.png")} alt={ drinkType }></img>;
  } else 
  if (drinkType === "Copper mug" || drinkType === "Copper Mug") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-copper.png")} alt={ drinkType }></img>;
  } else 
  if (drinkType === "Champagne flute" || drinkType === "Champagne Flute") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-champagne.png")} alt={ drinkType }></img>;
  } else 
  if (drinkType === "Whiskey sour glass") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-whisky-sour.png")} alt={ drinkType }></img>;
  }  
   if (drinkType === "Punch bowl") {
    return <img className={styles.icons} src={require("../../images/cocktails/Cocktail-punch.png")} alt={ drinkType }></img>;
  } else  {
    return <small>{drinkType}</small>;
    //<img className={styles.icons} src={require("../../images/cocktails/Cocktail-collins.png")} alt={ drinkType }></img>;;
  }
};

export default drinkImg;