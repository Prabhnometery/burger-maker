import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import ToolBar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer : !prevState.showSideDrawer }
        });
    }

    render() {
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer show={this.state.showSideDrawer} clicked={this.showSideDrawerHandler} />
                <main className={classes.Content}>{this.props.children }</main>

            </Aux>
        )}
}

export default Layout;
