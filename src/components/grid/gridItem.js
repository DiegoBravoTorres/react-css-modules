
import React from "react";
import styles from './gridItem.module.css'
import Explorer from './Explorer';
import Badge from "./Badge";


const GridItem = (props)=>{
    return(
        <div className={styles.card} onClick={()=> props.updateClick(props.fact.id)}>
            {props.fact.clicked ? <Explorer /> : <Badge />}
            <h2 className={styles.title}> 
                {props.fact.title}
            </h2>
            <article className={styles.fact}> {props.fact.fact} </article>
        </div>
    )
};

export default GridItem;