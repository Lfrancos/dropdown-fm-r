import React from 'react';
import './buttons.scss';

export const Button = (props) => {

    return (
        <button className={`btn ${props.buttonStyle} ${props.className}`} onClick={props.onClick} >
            {props.children}
        </button>
    );
}