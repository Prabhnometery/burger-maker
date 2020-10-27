import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    const ingredientList = Object.keys(props.ingredients).map((ingredient) => {
        return(<li key={ingredient}><span style={{ textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}</li>)
        })
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientList}
            </ul>
            <p>Continue to Checkout?</p>
            <strong><p>Total Price: {props.totalPrice.toFixed(2)}</p></strong>  
            <Button clicked={props.clicked} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.continue} btnType='Success'>ORDER</Button>
            
        </Aux>

    );
}

export default OrderSummary;
