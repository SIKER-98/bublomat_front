import React from 'react';
import './Person.css'

export default function Person(props) {
    return (
        <div className={'personCard'}>
            <img src={props.personImage} alt={props.personName}/>
            <p>{props.personName}</p>
        </div>
    )
}