import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux'

const SideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <BackDrop show={props.show} clicked={props.clicked} />
            <div className={attachedClasses.join(' ')} >
                <Logo height="11%" marginL="30%"/>
                <NavigationItems />
            </div>
        </Aux>
    );
}
export default SideDrawer;
