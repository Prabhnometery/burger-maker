import React from 'react';

import classes from './Logo.module.css';

import burgerLogo from '../../assets/images/burger-logo.png'



const Logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height, marginLeft: props.marginL}}>
        <img src={burgerLogo} alt="My Burger" />
    </div>

);

export default Logo;


