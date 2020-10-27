import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
        { label: 'Salad', type: 'salad'},
        { label: 'Bacon', type: 'bacon'},
        { label: 'Cheese', type: 'cheese'},
        { label: 'Meat', type: 'meat'},
];

const BuildControls = (props) => (
    <div className= {classes.BuildControls} >
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        { 
            controls.map((control) => (
            <BuildControl
            key= { control.label } 
            label={ control.label }
            added= {() => props.addIngredient(control.type)}
            removed= {() => props.removeIngredient(control.type) }
            disabled= {props.disabled[control.type]}
            />
         ))}
        <button onClick={props.clearIngredients}>Clear all the incredients</button>
        <button onClick={props.orderClick} className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>

    </div>


)

export default BuildControls;
