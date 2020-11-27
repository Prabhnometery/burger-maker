import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[OrderSummary.js] updated')
    }

    render() {
        const ingredientList = Object.keys(this.props.ingredients).map((ingredient) => {
            return(<li key={ingredient}><span style={{ textTransform: 'capitalize'}}>{ingredient}</span>: {this.props.ingredients[ingredient]}</li>)
            })
        
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientList}
            </ul>
            <p>Continue to Checkout?</p>
            <strong><p>Total Price: {this.props.totalPrice.toFixed(2)}</p></strong>  
                <Button clicked={this.props.clicked} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.continue} btnType='Success'>ORDER</Button>
        
            
        </Aux>

    );}
}

export default OrderSummary;
