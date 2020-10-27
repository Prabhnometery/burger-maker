import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENTS_PRICE  = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }, 
        totalPrice: 4,
        purchasable: false,
        orderClick: false
    }

    modalClosedHandler = () => {
        this.setState({ orderClick: false})
    }

    orderClickHandler = () => {
        this.setState({ orderClick: true})
    }

    updatePurchaseState = (ingredients) => {

        const sum  = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        },0);

        this.setState({ purchasable: sum > 0});


    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice:  newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice:  newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    clearIngredientHandler = () => {
        this.setState({
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        })
    }

    purchaseContinueHandler = () => {
        alert('You continue!')
    }

    

    render() {
    
        let disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.orderClick} modalClosed={this.modalClosedHandler}>
                    <OrderSummary 
                    clicked={this.modalClosedHandler} 
                    continue={this.purchaseContinueHandler}
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    />  
                </Modal>
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls 
                addIngredient= {this.addIngredientHandler}
                removeIngredient = { this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                clearIngredients={this.clearIngredientHandler}
                orderClick={this.orderClickHandler}
                />
                
            </Aux>
        )
    }
}

export default BurgerBuilder;
