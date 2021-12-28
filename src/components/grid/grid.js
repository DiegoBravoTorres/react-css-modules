import React from "react";
import GridItem from './gridItem';
import cx from 'classnames';

import styles from './grid.module.css'
import mediaStyles from './media.module.css'


export default class App extends React.Component{

    updateClick(id){
        this.props.updateClick(id);
    }
    renderFacts() {
        return this.props.facts.map(item =>
            <GridItem 
            key={item.id}
            fact={item}
            updateClick={this.updateClick.bind(this)}
            />
        );
    }
    render(){
        return (
            <section className={cx(styles.grid, mediaStyles.grid)}>
                {this.renderFacts()}
            </section>

        );
    }
}