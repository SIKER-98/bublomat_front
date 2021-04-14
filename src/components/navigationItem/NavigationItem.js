import React from 'react';
import './NavigationItem.css';
import {NavLink} from "react-router-dom";

function NavigationItem(props) {

    return (
        <li>
            <NavLink to={props.href}>{props.text}</NavLink>
        </li>
    )

}

export default NavigationItem;